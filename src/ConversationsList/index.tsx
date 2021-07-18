import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { MainContext } from "../core/contexts/MainContext";

const ConversationsList = () => {
  const { state } = useContext(MainContext);
  const { conversationsList } = state;

  if (conversationsList.length === 0) return <div>Aucune conversation</div>;

  return (
    <nav>
      <h1>Discussions</h1>
      <ul>
        {conversationsList.map((conversation) => {
          let match = useRouteMatch(`/conversation/${conversation.id}`);

          return (
            <li key={conversation.id}>
              <Link
                to={`/conversation/${conversation.id}`}
                aria-current={!!match ? "page" : undefined}
              >
                My conversation id : {conversation.id}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ConversationsList;
