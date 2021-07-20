import dayjs from "dayjs";
import React from "react";

import { Message } from "../core/contexts/MainContext";
import {
  Content,
  Hour,
  MessageContent,
  UserName,
  Wrapper,
  Container,
} from "./Messages.styled";

interface MessagesProps {
  messages: Message[];
  conversationId: string;
  authId: string;
  isDirectMessage: boolean;
}

const Messages = ({
  messages,
  conversationId,
  authId,
  isDirectMessage,
}: MessagesProps) => (
  <>
    {messages.map((message, key) => {
      const isUserNameDisplay = !isDirectMessage && message.user.id !== authId;
      const isNotMe = message.user.id !== authId;
      const hour = dayjs(message.created_date).format("HH:mm");

      return (
        <Container key={`${key}-${conversationId}`} isLeft={isNotMe}>
          {isUserNameDisplay && <UserName>{message.user.name}</UserName>}
          <Wrapper isLeft={isNotMe}>
            <MessageContent isPrivate={message.private}>
              <Content>{message.content}</Content>
            </MessageContent>
            <Hour>{hour}</Hour>
          </Wrapper>
        </Container>
      );
    })}
  </>
);

export default Messages;
