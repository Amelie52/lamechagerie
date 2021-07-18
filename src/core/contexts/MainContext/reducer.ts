import { Conversation, conversationsListElement } from ".";
import { Action, CONVERSATION } from "./action";
import { FETCH_CONVERSATION, FETCH_CONVERSATIONS_LIST } from "./action";

export type State = {
  conversationsList: conversationsListElement[];
  isConversationsListLoading: boolean;
  conversation: Conversation;
};

export const initialState = {
  conversationsList: [],
  isConversationsListLoading: true,
  conversation: {
    messages: [],
    users: [],
    id: "",
  },
};

export function mainReducer(
  state: State = initialState,
  action: Action
): State {
  switch (action.type) {
    case FETCH_CONVERSATIONS_LIST.SUCCESS:
      return {
        ...state,
        conversationsList: action.conversationsList,
        isConversationsListLoading: false,
      };
    case FETCH_CONVERSATIONS_LIST.FAILURE:
      return {
        ...state,
        conversationsList: [],
        isConversationsListLoading: false,
      };
    case FETCH_CONVERSATION.SUCCESS:
      return {
        ...state,
        conversation: action.conversation,
      };
    case FETCH_CONVERSATION.FAILURE:
      return {
        ...state,
        conversation: {
          messages: [],
          users: [],
          id: "",
        },
      };
    case CONVERSATION.NEW_MESSAGE:
      return {
        ...state,
        // verifier l'id avant de l'ajouter (si jamais on change de page entre temps)
        conversation:
          action.conversationId === state.conversation.id
            ? {
                messages: [...state.conversation.messages, action.message],
                users: state.conversation.users,
                id: state.conversation.id,
              }
            : state.conversation,
      };
    default:
      return state;
  }
}
