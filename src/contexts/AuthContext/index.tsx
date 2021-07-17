import React, { createContext } from "react";
import type { ReactNode } from "react";

interface ContextProps {
  id: string;
  name: string;
  picture: string;
}

export const AuthContext = createContext({} as ContextProps);

export function AuthProvider(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <AuthContext.Provider
      value={{
        id: "50a67718-32ec-414a-89ca-8b724b26c2ab",
        name: "Jeanne",
        picture:
          "https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
