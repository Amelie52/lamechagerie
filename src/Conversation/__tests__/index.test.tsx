import * as React from "react";
import { MemoryRouter, Route } from "react-router";
import Conversation from "..";
import {
  render,
  screen,
  waitFor,
  fireEvent,
} from "../../config/jest/test-utils";
import { MainContext } from "../../core/contexts/MainContext";
import { initialState } from "../../core/contexts/MainContext/reducer";
import * as conversationsServices from "../../core/services/conversations";
import * as mockApiResponse from "../../core/services/mock-api-response";

jest.mock("../Messages", () => () => <div data-mock="Messages" />);

const mockDispatch = jest.fn();

describe("src/Conversation", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("SHOULD render correctly component if there is no messages", async () => {
    jest.spyOn(conversationsServices, "getConversation");

    render(
      <MemoryRouter initialEntries={["conversation/123"]}>
        <MainContext.Provider
          value={{
            state: initialState,
            dispatch: mockDispatch,
          }}
        >
          <Route path="conversation/:conversationId">
            <Conversation />
          </Route>
        </MainContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText("aucun messages")).toBeInTheDocument();
  });

  it("SHOULD fetch conversation", async () => {
    const spy = jest
      .spyOn(conversationsServices, "getConversation")
      .mockResolvedValueOnce({
        data: mockApiResponse.conversation[
          "78967718-32ec-313a-89ca-8b724b26c888"
        ],
      });

    render(
      <MemoryRouter
        initialEntries={["/conversation/78967718-32ec-313a-89ca-8b724b26c888"]}
      >
        <MainContext.Provider
          value={{ state: initialState, dispatch: mockDispatch }}
        >
          <Route path="/conversation/:conversationId">
            <Conversation />
          </Route>
        </MainContext.Provider>
      </MemoryRouter>
    );

    expect(spy).toHaveBeenCalledWith("78967718-32ec-313a-89ca-8b724b26c888");

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith({
        type: "main/FETCH_CONVERSATION/SUCCESS",
        conversation:
          mockApiResponse.conversation["78967718-32ec-313a-89ca-8b724b26c888"],
      });
      expect(mockDispatch).not.toHaveBeenCalledWith({
        type: "main/FETCH_CONVERSATION/FAILURE",
      });
    });
  });

  it("SHOULD failed fetch conversation request", async () => {
    const spy = jest
      .spyOn(conversationsServices, "getConversation")
      .mockRejectedValueOnce(new Error("Oops"));

    render(
      <MemoryRouter
        initialEntries={["/conversation/78967718-32ec-313a-89ca-8b724b26c888"]}
      >
        <MainContext.Provider
          value={{ state: initialState, dispatch: mockDispatch }}
        >
          <Route path="/conversation/:conversationId">
            <Conversation />
          </Route>
        </MainContext.Provider>
      </MemoryRouter>
    );

    expect(spy).toHaveBeenCalledWith("78967718-32ec-313a-89ca-8b724b26c888");

    await waitFor(() => {
      expect(mockDispatch).not.toHaveBeenCalledWith({
        type: "main/FETCH_CONVERSATION/SUCCESS",
        conversation:
          mockApiResponse.conversation["78967718-32ec-313a-89ca-8b724b26c888"],
      });
      expect(mockDispatch).toHaveBeenCalledWith({
        type: "main/FETCH_CONVERSATION/FAILURE",
      });
    });
  });

  it("SHOULD render correctly two group of messages", async () => {
    jest.spyOn(conversationsServices, "getConversation");

    render(
      <MemoryRouter
        initialEntries={["/conversation/78967718-32ec-313a-89ca-8b724b26c888"]}
      >
        <MainContext.Provider
          value={{
            state: {
              ...initialState,
              conversation:
                mockApiResponse.conversation[
                  "78967718-32ec-313a-89ca-8b724b26c888"
                ],
            },
            dispatch: mockDispatch,
          }}
        >
          <Route path="/conversation/:conversationId">
            <Conversation />
          </Route>
        </MainContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText("15/10/2020")).toBeInTheDocument();
    expect(screen.getByText("18/12/2020")).toBeInTheDocument();
  });

  it("SHOULD submit the form", async () => {
    const date = new Date("2020-12-18T13:06:10.000Z");
    jest.spyOn(conversationsServices, "getConversation");
    const spySendNewMessage = jest
      .spyOn(conversationsServices, "sendNewMessage")
      .mockResolvedValueOnce({
        data: {
          user: {
            name: "Jeanne",
            id: "50a67718-32ec-414a-89ca-8b724b26c2ab",
            picture:
              "https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          },
          content: "My new message",
          private: true,
          created_date: date,
        },
      });

    render(
      <MemoryRouter
        initialEntries={["/conversation/78967718-32ec-313a-89ca-8b724b26c888"]}
      >
        <MainContext.Provider
          value={{
            state: {
              ...initialState,
              conversation:
                mockApiResponse.conversation[
                  "78967718-32ec-313a-89ca-8b724b26c888"
                ],
            },
            dispatch: mockDispatch,
          }}
        >
          <Route path="/conversation/:conversationId">
            <Conversation />
          </Route>
        </MainContext.Provider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalled();
    });

    fireEvent.change(screen.getByPlaceholderText("your message"), {
      target: { value: "My new message" },
    });
    fireEvent.click(screen.getByLabelText("private"));
    fireEvent.click(screen.getByText("Submit"));

    await waitFor(() => {
      expect(spySendNewMessage).toHaveBeenCalledWith(
        "78967718-32ec-313a-89ca-8b724b26c888",
        {
          user: {
            name: "Jeanne",
            id: "50a67718-32ec-414a-89ca-8b724b26c2ab",
            picture:
              "https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          },
          content: "My new message",
          private: true,
        }
      );
      expect(mockDispatch.mock.calls[1]).toEqual([
        {
          type: "main/CONVERSATION/NEW_MESSAGE",
          message: {
            user: {
              name: "Jeanne",
              id: "50a67718-32ec-414a-89ca-8b724b26c2ab",
              picture:
                "https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            },
            content: "My new message",
            private: true,
            created_date: date,
          },
          conversationId: "78967718-32ec-313a-89ca-8b724b26c888",
        },
      ]);
    });
  });
});
