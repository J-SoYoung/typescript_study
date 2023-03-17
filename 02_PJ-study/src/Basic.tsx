import React, { FC, createContext } from "react";
import "./App.css";
import { Greek } from "./components/Greek";
import { Introduce } from "./components/Introduce";
import { IntroduceList } from "./components/IntroduceList";
import { Person, HairColor } from "./components/Person";

const Basic: FC = () => {
  const personName = {
    first: "정",
    last: "소영",
  };

  const nameList = [
    {
      first: "Brand",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];
  return (
    <div className="App">
      <div className="basic">
        <h2>basic type</h2>
        <Person
          name="thdud"
          age={20}
          email="thdud@gmail"
          hairColor={HairColor.Pink}
        />
        <Greek name="thgml" messageCount={10} isLogin={false} />
      </div>
      <div className="introBox">
        <h2>arr-object type</h2>
        <Introduce name={personName} />
        <IntroduceList names={nameList} />
      </div>
    </div>
  );
};

export default Basic;
