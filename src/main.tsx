import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { MainProvider } from "./contexts/MainContext";
import { AuthProvider } from "./contexts/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <MainProvider>
        <App />
      </MainProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
