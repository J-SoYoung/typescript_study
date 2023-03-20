import React from "react";
import ReactDOM from "react-dom/client";
import AppBasic from "./AppBasic";
import AppEvent from "./AppEvent";
import AppProps from "./AppProps";
import AppState from "./AppState";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppState />
  </React.StrictMode>
);
