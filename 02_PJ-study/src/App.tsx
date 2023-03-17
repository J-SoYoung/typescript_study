import React, { FC, createContext } from "react";
import "./App.css";
import { Heading } from "./components/Heading";
import { SubHead } from "./components/SubHead";
import { Status } from "./components/Status";

const App: FC = () => {
  return (
    <div className="AppBox">
      <Heading>Children 데이터 출력하기</Heading>
      <SubHead>
        <Heading>헤더 컴포넌트 사이에 있는 데이터를 가져온다</Heading>
      </SubHead>
      <Status status="error" />
    </div>
  );
};

export default App;
