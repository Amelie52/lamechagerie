import React, { useContext } from "react";
import { useRouteMatch } from "react-router-dom";

import {
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupItemImg,
} from "../common/Avatar";
import { MainContext } from "../core/contexts/MainContext";
import {
  Navigation,
  NavigationLink,
  NavigationList,
  NavigationListItem,
  Title,
  UsersName,
} from "./styled";

const ConversationsList = () => {
  const { state } = useContext(MainContext);
  const { conversationsList } = state;

  if (conversationsList.length === 0) return <div>Aucune conversation</div>;

  return (
    <Navigation>
      <Title>Discussions</Title>
      <NavigationList>
        {conversationsList.map((conversation) => {
          const match = useRouteMatch(`/conversation/${conversation.id}`);
          const usersName = conversation.users
            .map((user) => user.name)
            .join(", ");

          return (
            <NavigationListItem key={conversation.id} isActive={!!match}>
              <NavigationLink
                to={`/conversation/${conversation.id}`}
                aria-current={!!match ? "page" : undefined}
                data-testid={`navigation-link-${conversation.id}`}
              >
                <UsersName>{usersName}</UsersName>
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
              </NavigationLink>
            </NavigationListItem>
          );
        })}
      </NavigationList>
    </Navigation>
  );
};

export default ConversationsList;
