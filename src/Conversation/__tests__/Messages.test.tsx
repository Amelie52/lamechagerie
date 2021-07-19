import React from "react";
import type { ComponentProps } from "react";

import Messages from "../Messages";
import { render, screen } from "../../config/jest/test-utils";
import * as mockApiResponse from "../../core/services/mock-api-response";

describe("src/Conversation/Messages", () => {
  let props: ComponentProps<typeof Messages>;

  beforeEach(() => {
    props = {
      messages:
        mockApiResponse.conversation["78967718-32ec-313a-89ca-8b724b26c888"]
          .messages,
      conversationId: "78967718-32ec-313a-89ca-8b724b26c888",
      authId: "50a67718-32ec-414a-89ca-8b724b26c2ab",
      isDirectMessage: false,
    };
  });

  it("SHOULD render correctly component", async () => {
    render(<Messages {...props} />);

    expect(screen.getAllByText("Simba")).toHaveLength(2);
    expect(screen.getAllByText("14:06")).toHaveLength(1);
  });
});
