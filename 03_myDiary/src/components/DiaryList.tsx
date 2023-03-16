import React from "react";
import { DiaryData } from "../type/mainType";
import { Title } from "./DiaryEdit";
import { DiaryItem } from "./DiaryItem";

export const DiaryList = () => {
  return (
    <>
      <Title>일기 리스트</Title>
      <DiaryItem/>
    </>
  );
};
