import React, { useEffect, useContext } from "react";
import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";

import * as conversationsServices from "../core/services/conversations";
import Conversation from "../Conversation";
import ConversationsList from "../ConversationsList";
import { FETCH_CONVERSATIONS_LIST } from "../core/contexts/MainContext/action";
import { MainContext } from "../core/contexts/MainContext";
import { AuthContext } from "../core/contexts/AuthContext";
import { Avatar } from "../common/Avatar";
import { DefaultText } from "../common/DefaultText";
import { GlobalStyle } from "../GlobalStyle";
import { theme } from "../theme";
import {
  Header,
  LogoContainer,
  Main,
  MainContainer,
  UserContainer,
} from "./styled";

function App() {
  const { state, dispatch } = useContext(MainContext);
  const auth = useContext(AuthContext);
  const { isConversationsListLoading } = state;

  useEffect(() => {
    const fetchList = async () => {
      try {
        const { data } = await conversationsServices.getConversationsList();
        dispatch({
          type: FETCH_CONVERSATIONS_LIST.SUCCESS,
          conversationsList: data,
        });
      } catch (error) {
        dispatch({ type: FETCH_CONVERSATIONS_LIST.FAILURE });
      }
    };

    fetchList();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header role="banner">
        <LogoContainer>La Mechagerie</LogoContainer>
        <UserContainer>
          <span>Bienvenue {auth.name} !</span>
          <Avatar src={auth.picture} alt={`Photo de ${auth.name}`} />
        </UserContainer>
      </Header>
      {isConversationsListLoading ? (
        <DefaultText>Chargement...</DefaultText>
      ) : (
        <MainContainer>
          <ConversationsList />
          <Main role="main">
            <Switch>
              <Route path="/conversation/:conversationId">
                <Conversation />
              </Route>
              <Route path="*">
                <DefaultText>Sélectionnez une discussion</DefaultText>
              </Route>
            </Switch>
          </Main>
        </MainContainer>
      )}
    </ThemeProvider>
  );
}

export default App;
