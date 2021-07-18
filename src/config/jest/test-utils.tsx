import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { AuthProvider } from "../../core/contexts/AuthContext";

const AllTheProviders: FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
