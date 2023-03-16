import React, { FC } from "react";
import "./App.css";
import { Person, HairColor} from "./components/Person";

const App: FC = () => {
  return (
    <div className="App">
      <Person name="thdud" age={20} email="thdud@gmail" hairColor={HairColor.Pink} />
    </div>
  );
};

export default App;
