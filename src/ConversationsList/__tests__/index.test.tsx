import * as React from "react";

import { render, screen } from "../../config/jest/test-utils";
import { MainContext } from "../../core/contexts/MainContext";
import { initialState } from "../../core/contexts/MainContext/reducer";
import { MainProvider } from "../../core/contexts/MainContext";
import ConversationsList from "../";
import * as mockApiResponse from "../../core/services/mock-api-response";
import { MemoryRouter } from "react-router";

describe("src/ConversationsList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("SHOULD render correctly component if there is no conversation", () => {
    render(
      <MainProvider>
        <ConversationsList />
      </MainProvider>
    );

    expect(screen.getByText("Aucune conversation")).toBeInTheDocument();
  });

  it("SHOULD render correctly component if there are conversations", () => {
    render(
      <MemoryRouter
        initialEntries={["/conversation/78967718-32ec-313a-89ca-8b724b26c888"]}
      >
        <MainContext.Provider
          value={{
            state: {
              ...initialState,
              conversationsList: mockApiResponse.conversationList.data,
            },
            dispatch: jest.fn(),
          }}
        >
          <ConversationsList />
        </MainContext.Provider>
      </MemoryRouter>
    );

    expect(
      screen.getByTestId("navigation-link-78967718-32ec-313a-89ca-8b724b26c888")
    ).toHaveAttribute("aria-current", "page");
    expect(
      screen.getByTestId(
        "navigation-link-765657718-1829-7623-7297-8b724b210989"
      )
    ).not.toHaveAttribute("aria-current", "page");
  });
});
