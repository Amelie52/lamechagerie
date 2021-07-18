import React, { createContext, useReducer } from "react";
import type { Dispatch, ReactNode } from "react";

import type { Action } from "./action";
import { initialState, mainReducer, State } from "./reducer";

export interface User {
  name: string;
  id: string;
  picture: string;
}

export interface Message {
  user: User;
  content: string;
  private: boolean;
  created_date: Date;
}

export interface Conversation {
  messages: Message[];
  users: User[];
  id: string;
}

export interface conversationsListElement {
  users: User[];
  id: string;
}

interface ContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

export const MainContext = createContext({} as ContextProps);

export function MainProvider(props: { children: ReactNode }) {
  const { children } = props;
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
}
