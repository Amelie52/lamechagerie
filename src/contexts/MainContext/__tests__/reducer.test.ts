import {
  CONVERSATION,
  ConversationNewMessage,
  FetchConversationFailure,
  FetchConversationRequest,
  FetchConversationsListFailure,
  FetchConversationsListRequest,
  FetchConversationsListSuccess,
  FetchConversationSuccess,
  FETCH_CONVERSATION,
  FETCH_CONVERSATIONS_LIST,
} from "../action";
import { mainReducer } from "../reducer";

describe("mainContext/reducer", () => {
  const initialState = {
    conversationsList: [],
    isConversationsListLoading: false,
    conversation: {
      messages: [],
      users: [],
      id: "",
    },
    isConversationLoading: false,
  };

  describe("main/FETCH_CONVERSATIONS_LIST", () => {
    it("SHOULD return the right state when a FETCH_CONVERSATIONS_LIST.REQUEST is dispatched", () => {
      const action: FetchConversationsListRequest = {
        type: FETCH_CONVERSATIONS_LIST.REQUEST,
      };
      const state = mainReducer(initialState, action);

      expect(state).toEqual({
        conversationsList: [],
        isConversationsListLoading: true,
        conversation: {
          messages: [],
          users: [],
          id: "",
        },
        isConversationLoading: false,
      });
    });

    it("SHOULD return the right state when a FETCH_CONVERSATIONS_LIST.SUCCESS is dispatched", () => {
      const action: FetchConversationsListSuccess = {
        type: FETCH_CONVERSATIONS_LIST.SUCCESS,
        conversationsList: [
          {
            users: [{ name: "Cléo", id: "456", picture: "my-image" }],
            id: "123",
          },
        ],
      };
      const state = mainReducer(initialState, action);

      expect(state).toEqual({
        conversationsList: [
          {
            users: [{ name: "Cléo", id: "456", picture: "my-image" }],
            id: "123",
          },
        ],
        isConversationsListLoading: false,
        conversation: {
          messages: [],
          users: [],
          id: "",
        },
        isConversationLoading: false,
      });
    });

    it("SHOULD return the right state when a FETCH_CONVERSATIONS_LIST.FAILURE is dispatched", () => {
      const action: FetchConversationsListFailure = {
        type: FETCH_CONVERSATIONS_LIST.FAILURE,
      };
      const state = mainReducer(initialState, action);

      expect(state).toEqual({
        conversationsList: [],
        isConversationsListLoading: false,
        conversation: {
          messages: [],
          users: [],
          id: "",
        },
        isConversationLoading: false,
      });
    });
  });

  describe("main/FETCH_CONVERSATION", () => {
    it("SHOULD return the right state when a FETCH_CONVERSATION.REQUEST is dispatched", () => {
      const action: FetchConversationRequest = {
        type: FETCH_CONVERSATION.REQUEST,
      };
      const state = mainReducer(initialState, action);

      expect(state).toEqual({
        conversationsList: [],
        isConversationsListLoading: false,
        conversation: {
          messages: [],
          users: [],
          id: "",
        },
        isConversationLoading: true,
      });
    });

    it("SHOULD return the right state when a FETCH_CONVERSATION.SUCCESS is dispatched", () => {
      const action: FetchConversationSuccess = {
        type: FETCH_CONVERSATION.SUCCESS,
        conversation: {
          messages: [
            {
              user: { name: "Cléo", id: "456", picture: "my-image" },
              content: "Hello !",
              private: false,
            },
            {
              user: { name: "John", id: "435", picture: "my-image" },
              content: "Hello Cléo !",
              private: false,
            },
          ],
          users: [
            { name: "Cléo", id: "456", picture: "my-image" },
            { name: "John", id: "435", picture: "my-image" },
          ],
          id: "890",
        },
      };
      const state = mainReducer(initialState, action);

      expect(state).toEqual({
        conversationsList: [],
        isConversationsListLoading: false,
        conversation: {
          messages: [
            {
              user: { name: "Cléo", id: "456", picture: "my-image" },
              content: "Hello !",
              private: false,
            },
            {
              user: { name: "John", id: "435", picture: "my-image" },
              content: "Hello Cléo !",
              private: false,
            },
          ],
          users: [
            { name: "Cléo", id: "456", picture: "my-image" },
            { name: "John", id: "435", picture: "my-image" },
          ],
          id: "890",
        },
        isConversationLoading: false,
      });
    });

    it("SHOULD return the right state when a FETCH_CONVERSATION.FAILURE is dispatched", () => {
      const action: FetchConversationFailure = {
        type: FETCH_CONVERSATION.FAILURE,
      };
      const state = mainReducer(initialState, action);

      expect(state).toEqual({
        conversationsList: [],
        isConversationsListLoading: false,
        conversation: {
          messages: [],
          users: [],
          id: "",
        },
        isConversationLoading: false,
      });
    });
  });

  describe("main/CONVERSATION", () => {
    it("SHOULD return the right state when a CONVERSATION.NEW_MESSAGE is dispatched", () => {
      const action: ConversationNewMessage = {
        type: CONVERSATION.NEW_MESSAGE,
        message: {
          user: { name: "John", id: "435", picture: "my-image" },
          content: "Hello Cléo !",
          private: false,
        },
      };
      const state = mainReducer(
        {
          conversationsList: [],
          isConversationsListLoading: false,
          conversation: {
            messages: [
              {
                user: { name: "Cléo", id: "456", picture: "my-image" },
                content: "Hello !",
                private: false,
              },
            ],
            users: [{ name: "Cléo", id: "456", picture: "my-image" }],
            id: "890",
          },
          isConversationLoading: false,
        },
        action
      );

      expect(state).toEqual({
        conversationsList: [],
        isConversationsListLoading: false,
        conversation: {
          messages: [
            {
              user: { name: "Cléo", id: "456", picture: "my-image" },
              content: "Hello !",
              private: false,
            },
            {
              user: { name: "John", id: "435", picture: "my-image" },
              content: "Hello Cléo !",
              private: false,
            },
          ],
          users: [{ name: "Cléo", id: "456", picture: "my-image" }],
          id: "890",
        },
        isConversationLoading: false,
      });
    });
  });
});
