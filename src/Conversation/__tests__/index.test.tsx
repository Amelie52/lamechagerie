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
window.HTMLElement.prototype.scrollIntoView = jest.fn();

const getConversationSpy = jest.spyOn(conversationsServices, "getConversation");

afterEach(() => {
  jest.clearAllMocks();
});

describe("src/Conversation", () => {
  it("SHOULD render correctly component if there is no messages", async () => {
    getConversationSpy.mockResolvedValueOnce({
      data: {
        messages: [],
        id: "",
        users: [],
      },
    });

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

    expect(screen.getByText("Aucun message")).toBeInTheDocument();
  });

  it("SHOULD fetch conversation", async () => {
    getConversationSpy.mockResolvedValueOnce({
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

    await waitFor(() => {
      expect(getConversationSpy).toHaveBeenCalledWith(
        "78967718-32ec-313a-89ca-8b724b26c888"
      );
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "main/FETCH_CONVERSATION/SUCCESS",
      conversation:
        mockApiResponse.conversation["78967718-32ec-313a-89ca-8b724b26c888"],
    });
    expect(mockDispatch).not.toHaveBeenCalledWith({
      type: "main/FETCH_CONVERSATION/FAILURE",
    });
  });

  it("SHOULD failed fetch conversation request", async () => {
    getConversationSpy.mockRejectedValueOnce(new Error("Oops"));

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

    expect(getConversationSpy).toHaveBeenCalledWith(
      "78967718-32ec-313a-89ca-8b724b26c888"
    );

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
    getConversationSpy.mockResolvedValueOnce({
      data: mockApiResponse.conversation[
        "78967718-32ec-313a-89ca-8b724b26c888"
      ],
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

    expect(screen.getByText("15/10/2020")).toBeInTheDocument();
    expect(screen.getByText("18/12/2020")).toBeInTheDocument();
  });

  it("SHOULD submit the form", async () => {
    const date = new Date("2020-12-18T13:06:10.000Z");

    getConversationSpy.mockResolvedValueOnce({
      data: mockApiResponse.conversation[
        "78967718-32ec-313a-89ca-8b724b26c888"
      ],
    });
    const spySendNewMessage = jest
      .spyOn(conversationsServices, "sendNewMessage")
      .mockResolvedValueOnce({
        data: {
          user: {
            name: "Tigrou",
            id: "50a67718-32ec-414a-89ca-8b724b26c2ab",
            picture:
              "https://images.pexels.com/photos/156321/pexels-photo-156321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
      expect(getConversationSpy).toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenNthCalledWith(2, {
        type: "main/FETCH_CONVERSATION/SUCCESS",
        conversation:
          mockApiResponse.conversation["78967718-32ec-313a-89ca-8b724b26c888"],
      });
    });

    fireEvent.change(screen.getByPlaceholderText("Message..."), {
      target: { value: "My new message" },
    });
    fireEvent.click(screen.getByLabelText("privé"));
    fireEvent.keyPress(screen.getByPlaceholderText("Message..."), {
      key: "Enter",
      code: 13,
      charCode: 13,
    });

    await waitFor(() => {
      expect(spySendNewMessage).toHaveBeenCalledWith(
        "78967718-32ec-313a-89ca-8b724b26c888",
        {
          user: {
            name: "Tigrou",
            id: "50a67718-32ec-414a-89ca-8b724b26c2ab",
            picture:
              "https://images.pexels.com/photos/156321/pexels-photo-156321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          },
          content: "My new message",
          private: true,
        }
      );
      expect(mockDispatch).toHaveBeenNthCalledWith(3, {
        type: "main/CONVERSATION/NEW_MESSAGE",
        message: {
          user: {
            name: "Tigrou",
            id: "50a67718-32ec-414a-89ca-8b724b26c2ab",
            picture:
              "https://images.pexels.com/photos/156321/pexels-photo-156321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          },
          content: "My new message",
          private: true,
          created_date: date,
        },
        conversationId: "78967718-32ec-313a-89ca-8b724b26c888",
      });
    });
  });
});
