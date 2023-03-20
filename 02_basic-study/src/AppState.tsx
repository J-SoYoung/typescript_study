import React from "react";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";

const AppState = () => {
  return (
    <div>
      <LoggedIn />
      <User />
    </div>
  );
};

export default AppState;
