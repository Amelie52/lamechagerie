import * as React from "react";
import { BrowserRouter } from "react-router-dom";

import App from "..";
import { render, screen, waitFor } from "../../config/jest/test-utils";
import { MainContext } from "../../core/contexts/MainContext";
import { initialState } from "../../core/contexts/MainContext/reducer";
import * as conversationsServices from "../../core/services/conversations";
import * as mockApiResponse from "../../core/services/mock-api-response";

jest.mock("../../Conversation", () => () => <div data-mock="Conversation" />);

jest.mock("../../ConversationsList", () => () => (
  <div data-mock="ConversationList" />
));

const mockDispatch = jest.fn();
describe("src/App", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("SHOULD render correctly component", async () => {
    render(
      <BrowserRouter>
        <MainContext.Provider
          value={{
            state: { ...initialState, isConversationsListLoading: false },
            dispatch: mockDispatch,
          }}
        >
          <App />
        </MainContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText("Bienvenue Tigrou !")).toBeInTheDocument();
    expect(screen.getByText("Sélectionnez une discussion")).toBeInTheDocument();
  });

  it("SHOULD fetch conversations list", async () => {
    const spy = jest
      .spyOn(conversationsServices, "getConversationsList")
      .mockResolvedValueOnce(mockApiResponse.conversationList);

    render(
      <MainContext.Provider
        value={{ state: initialState, dispatch: mockDispatch }}
      >
        <App />
      </MainContext.Provider>
    );

    expect(screen.getByText("Chargement...")).toBeInTheDocument();

    expect(spy).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith({
        type: "main/FETCH_CONVERSATIONS_LIST/SUCCESS",
        conversationsList: mockApiResponse.conversationList.data,
      });
      expect(mockDispatch).not.toHaveBeenCalledWith({
        type: "main/FETCH_CONVERSATIONS_LIST/FAILURE",
      });
    });
  });

  it("SHOULD failed fetch conversations list request", async () => {
    const spy = jest
      .spyOn(conversationsServices, "getConversationsList")
      .mockRejectedValueOnce(new Error("Oops"));

    render(
      <MainContext.Provider
        value={{ state: initialState, dispatch: mockDispatch }}
      >
        <App />
      </MainContext.Provider>
    );

    expect(spy).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(mockDispatch).not.toHaveBeenCalledWith({
        type: "main/FETCH_CONVERSATIONS_LIST/SUCCESS",
        conversationsList: mockApiResponse.conversationList.data,
      });
      expect(mockDispatch).toHaveBeenCalledWith({
        type: "main/FETCH_CONVERSATIONS_LIST/FAILURE",
      });
    });
  });
});
