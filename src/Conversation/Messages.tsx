import React from "react";
import Date from "../common/date";
import { Message } from "../core/contexts/MainContext";

const Messages = ({
  messages,
  conversationId,
  authId,
}: {
  messages: Message[];
  conversationId: string;
  authId: string;
}) => {
  return (
    <>
      {messages.map((message, key) => (
        <div
          key={`${message.user}-${key}-${conversationId}`}
          style={{
            backgroundColor:
              message.user.id === authId ? "transparent" : "papayawhip",
            borderBottom: "1px solid",
          }}
        >
          <div>user : {message.user.name}</div>
          <div style={{ whiteSpace: "pre-wrap" }}>{message.content}</div>
          <div>
            date <Date date={message.created_date} />
          </div>
          <div>is private ? {message.private ? "true" : "false"}</div>
        </div>
      ))}
    </>
  );
};

export default Messages;
