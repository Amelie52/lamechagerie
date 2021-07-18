import React, { useContext, useEffect } from "react";
import type { KeyboardEvent } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../core/contexts/AuthContext";

import { MainContext, Message } from "../core/contexts/MainContext";
import {
  CONVERSATION,
  FETCH_CONVERSATION,
} from "../core/contexts/MainContext/action";
import * as conversationsServices from "../core/services/conversations";
import dayjs from "dayjs";
import Messages from "./Messages";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  message: string;
  isPrivate: boolean;
};

const Conversation = () => {
  const { state, dispatch } = useContext(MainContext);
  const auth = useContext(AuthContext);
  const { conversationId } = useParams<{ conversationId: string }>();
  const { conversation } = state;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const fetchConversation = async () => {
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
      fetchConversation();
    }
  }, [conversationId]);

  const groupedMessages = () => {
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
  };

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

  return (
    <>
      <header>
        <h2>{conversation.users.map((user) => user.name).join(", ")}</h2>
      </header>
      <div>
        {conversation.messages.length === 0 ? (
          <div>aucun messages</div>
        ) : (
          groupedMessages().map((group) => {
            return (
              <React.Fragment key={group.date}>
                <h3>{group.date}</h3>
                <Messages
                  messages={group.messages}
                  conversationId={conversationId}
                  authId={auth.id}
                />
              </React.Fragment>
            );
          })
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            placeholder="your message"
            onKeyPress={handleUserKeyPress}
            {...register("message", { required: true })}
          />
          {errors.message && <span>required !</span>}
          <label>
            <input type="checkbox" {...register("isPrivate")} />
            private
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Conversation;
