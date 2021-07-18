import React, { useEffect, useContext } from "react";
import { Route, Switch } from "react-router";

import * as conversationsServices from "./core/services/conversations";
import Conversation from "./Conversation";
import ConversationsList from "./ConversationsList";
import { FETCH_CONVERSATIONS_LIST } from "./core/contexts/MainContext/action";
import { MainContext } from "./core/contexts/MainContext";
import { AuthContext } from "./core/contexts/AuthContext";

function App() {
  const { state, dispatch } = useContext(MainContext);
  const auth = useContext(AuthContext);
  const { isConversationsListLoading, conversationsList } = state;
  const date = new Date();

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
    <>
      <header role="banner">
        <span>Le bon test logo</span>
        <span>Welcome {auth.name}</span>
        <span>my picture</span>
      </header>
      {isConversationsListLoading ? (
        <div>Chargement...</div>
      ) : (
        <>
          <ConversationsList />
          <main role="main">
            <Switch>
              <Route path="/conversation/:conversationId">
                <Conversation />
              </Route>
              <Route path="*">
                <h2>Please select a conversation.</h2>
              </Route>
            </Switch>
          </main>
        </>
      )}

      <footer>{`© ${date.getFullYear()} Lebontest`}</footer>
    </>
  );
}

export default App;
