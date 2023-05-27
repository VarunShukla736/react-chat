import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { AuthContextProvider } from "./context/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter basename={process.env.BASE_URL}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </HashRouter>
  </React.StrictMode>
);
