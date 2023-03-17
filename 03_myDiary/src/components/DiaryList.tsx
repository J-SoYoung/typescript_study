import React, { FC } from "react";
import { Diary, DiaryProps } from "../type/mainType";
import { Title } from "./DiaryEdit";
import { DiaryItem } from "./DiaryItem";

export const DiaryList: FC<DiaryProps> = ({ diaryList }) => {
  return (
    <>
      <Title>일기 리스트</Title>
      {diaryList.map((diary, index) => {
        return <DiaryItem diary={diary} key={index} />;
      })}
    </>
  );
};
