import React, { useRef, useMemo, useContext, useEffect } from "react";
import type { KeyboardEvent } from "react";
import { useParams } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import dayjs from "dayjs";

import * as conversationsServices from "../core/services/conversations";
import Messages from "./Messages";
import { AuthContext } from "../core/contexts/AuthContext";
import { MainContext, Message } from "../core/contexts/MainContext";
import {
  CONVERSATION,
  FETCH_CONVERSATION,
} from "../core/contexts/MainContext/action";
import {
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupItemImg,
} from "../common/Avatar";
import { DefaultText } from "../common/DefaultText";
import {
  Container,
  Form,
  Header,
  Heading3,
  Label,
  MessagesContainer,
  MessagesWrapper,
  SubTitle,
  Textarea,
} from "./styled";

interface Inputs {
  message: string;
  isPrivate: boolean;
}

const Conversation = () => {
  const { state, dispatch } = useContext(MainContext);
  const { conversation, isConversationLoading } = state;
  const auth = useContext(AuthContext);
  const { conversationId } = useParams<{ conversationId: string }>();
  const usersName = conversation.users.map((user) => user.name).join(", ");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const MessagesWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchConversation = async () => {
      dispatch({ type: FETCH_CONVERSATION.REQUEST });

      try {
        const { data } = await conversationsServices.getConversation(
          conversationId
        );
        dispatch({ type: FETCH_CONVERSATION.SUCCESS, conversation: data });
      } catch (error) {
        // display toast error or something like that
        dispatch({ type: FETCH_CONVERSATION.FAILURE });
      }
    };

    if (conversationId) {
      reset();
      fetchConversation();
    }
  }, [conversationId]);

  useEffect(() => {
    MessagesWrapperRef?.current?.scrollIntoView(false);
  }, [conversation.messages]);

  const groupedMessages = useMemo(() => {
    const groups = conversation.messages.reduce(
      (groups: { [key: string]: Message[] }, message: Message) => {
        const date = dayjs(message.created_date).format("DD/MM/YYYY");

        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(message);
        return groups;
      },
      {}
    );

    return Object.keys(groups).map((date) => {
      return {
        date,
        messages: groups[date],
      };
    });
  }, [conversation.messages]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const { data: newMessage } = await conversationsServices.sendNewMessage(
        conversationId,
        {
          user: {
            ...auth,
          },
          content: data.message,
          private: data.isPrivate,
        }
      );

      dispatch({
        type: CONVERSATION.NEW_MESSAGE,
        message: newMessage,
        conversationId,
      });
      reset();
    } catch {
      // display toast error or something like that
    }
  };

  const handleUserKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  if (isConversationLoading && !conversation.id)
    return <DefaultText>Chargement</DefaultText>;

  return (
    <>
      <Header>
        {conversation.users.length > 0 && (
          <>
            <AvatarGroup>
              <AvatarGroupItem>
                <AvatarGroupItemImg
                  src={conversation.users[0].picture}
                  alt={`Photo de ${conversation.users[0].name}`}
                />
              </AvatarGroupItem>
              {conversation.users[1] && (
                <AvatarGroupItem>
                  <AvatarGroupItemImg
                    src={conversation.users[1].picture}
                    alt={`Photo de ${conversation.users[1].name}`}
                  />
                </AvatarGroupItem>
              )}
            </AvatarGroup>
            <SubTitle>{usersName}</SubTitle>
          </>
        )}
      </Header>
      <Container>
        <MessagesContainer>
          <MessagesWrapper ref={MessagesWrapperRef}>
            {conversation.messages.length === 0 ? (
              <DefaultText>Aucun message</DefaultText>
            ) : (
              groupedMessages.map((group) => {
                return (
                  <React.Fragment key={group.date}>
                    <Heading3>{group.date}</Heading3>
                    <Messages
                      messages={group.messages}
                      conversationId={conversationId}
                      authId={auth.id}
                      isDirectMessage={conversation.users.length === 1}
                    />
                  </React.Fragment>
                );
              })
            )}
          </MessagesWrapper>
        </MessagesContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Textarea
            title="Votre message"
            placeholder="Message..."
            rows={1}
            isRequired={errors.message}
            {...register("message", { required: true })}
            onKeyPress={handleUserKeyPress}
          />
          <Label>
            <input type="checkbox" {...register("isPrivate")} />
            privé
          </Label>
        </Form>
      </Container>
    </>
  );
};

export default Conversation;
