import {
  Conversation,
  conversationsListItem,
  Message,
} from "../contexts/MainContext";
import { conversation, conversationList } from "./mock-api-response";

export function getConversationsList(): Promise<{
  data: conversationsListItem[];
}> {
  // fake GET /conversations request response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(conversationList);
    }, 1000);
  });
}

export function getConversation(conversationId: string): Promise<{
  data: Conversation;
}> {
  // fake GET /conversations/:conversationId request response
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (conversation[conversationId]) {
        resolve({
          data: conversation[`${conversationId}`],
        });
      } else {
        reject(new Error("not found sorry"));
      }
    }, 200);
  });
}

export function sendNewMessage(
  _conversationId: string,
  message: Omit<Message, "created_date">
): Promise<{
  data: Message;
}> {
  // fake POST /conversations/:conversationId/message request response
  const todayDate = new Date();

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: { ...message, created_date: todayDate },
      });
    }, 200);
  });
}
