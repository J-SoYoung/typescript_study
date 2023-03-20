import React, { FC, createContext } from "react";
import "./App.css";
import { Heading } from "./components/propsBasic/Heading";
import { SubHead } from "./components/propsBasic/SubHead";
import { Status } from "./components/propsBasic/Status";

const AppProps: FC = () => {
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

export default AppProps;
