import type { Conversation, conversationsListElement, User } from ".";

export enum FETCH_CONVERSATIONS_LIST {
  REQUEST = "main/FETCH_CONVERSATIONS_LIST/REQUEST",
  SUCCESS = "main/FETCH_CONVERSATIONS_LIST/SUCCESS",
  FAILURE = "main/FETCH_CONVERSATIONS_LIST/FAILURE",
}

export enum FETCH_CONVERSATION {
  REQUEST = "main/FETCH_CONVERSATION/REQUEST",
  SUCCESS = "main/FETCH_CONVERSATION/SUCCESS",
  FAILURE = "main/FETCH_CONVERSATION/FAILURE",
}

export enum CONVERSATION {
  NEW_MESSAGE = "main/CONVERSATION/NEW_MESSAGE",
}

export interface FetchConversationsListRequest {
  type: FETCH_CONVERSATIONS_LIST.REQUEST;
}
export interface FetchConversationsListSuccess {
  type: FETCH_CONVERSATIONS_LIST.SUCCESS;
  conversationsList: conversationsListElement[];
}

export interface FetchConversationsListFailure {
  type: FETCH_CONVERSATIONS_LIST.FAILURE;
}

export interface FetchConversationRequest {
  type: FETCH_CONVERSATION.REQUEST;
}
export interface FetchConversationSuccess {
  type: FETCH_CONVERSATION.SUCCESS;
  conversation: Conversation;
}

export interface FetchConversationFailure {
  type: FETCH_CONVERSATION.FAILURE;
}

export interface ConversationNewMessage {
  type: CONVERSATION.NEW_MESSAGE;
  message: {
    user: User;
    content: string;
    private: boolean;
  };
}

export type Action =
  | FetchConversationsListRequest
  | FetchConversationsListSuccess
  | FetchConversationsListFailure
  | FetchConversationRequest
  | FetchConversationSuccess
  | FetchConversationFailure
  | ConversationNewMessage;
