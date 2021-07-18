import {
  CONVERSATION,
  ConversationNewMessage,
  FetchConversationFailure,
  FetchConversationsListFailure,
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
  };

  describe("main/FETCH_CONVERSATIONS_LIST", () => {
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
      });
    });
  });

  describe("main/FETCH_CONVERSATION", () => {
    it("SHOULD return the right state when a FETCH_CONVERSATION.SUCCESS is dispatched", () => {
      const action: FetchConversationSuccess = {
        type: FETCH_CONVERSATION.SUCCESS,
        conversation: {
          messages: [
            {
              user: { name: "Cléo", id: "456", picture: "my-image" },
              content: "Hello !",
              private: false,
              created_date: new Date("2020-11-18T13:31:10.000Z"),
            },
            {
              user: { name: "John", id: "435", picture: "my-image" },
              content: "Hello Cléo !",
              private: false,
              created_date: new Date("2020-11-18T13:32:10.000Z"),
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
              created_date: new Date("2020-11-18T13:31:10.000Z"),
            },
            {
              user: { name: "John", id: "435", picture: "my-image" },
              content: "Hello Cléo !",
              private: false,
              created_date: new Date("2020-11-18T13:32:10.000Z"),
            },
          ],
          users: [
            { name: "Cléo", id: "456", picture: "my-image" },
            { name: "John", id: "435", picture: "my-image" },
          ],
          id: "890",
        },
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
          created_date: new Date("2020-11-18T13:31:10.000Z"),
        },
        conversationId: "890",
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
                created_date: new Date("2020-11-18T13:29:10.000Z"),
              },
            ],
            users: [{ name: "Cléo", id: "456", picture: "my-image" }],
            id: "890",
          },
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
              created_date: new Date("2020-11-18T13:29:10.000Z"),
            },
            {
              user: { name: "John", id: "435", picture: "my-image" },
              content: "Hello Cléo !",
              private: false,
              created_date: new Date("2020-11-18T13:31:10.000Z"),
            },
          ],
          users: [{ name: "Cléo", id: "456", picture: "my-image" }],
          id: "890",
        },
      });
    });

    it("SHOULD not update conversation if conversation id is not the same WHEN CONVERSATION.NEW_MESSAGE is dispatched", () => {
      const action: ConversationNewMessage = {
        type: CONVERSATION.NEW_MESSAGE,
        message: {
          user: { name: "John", id: "435", picture: "my-image" },
          content: "Hello Cléo !",
          private: false,
          created_date: new Date("2020-11-18T13:31:10.000Z"),
        },
        conversationId: "123",
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
      });
    });
  });
});
