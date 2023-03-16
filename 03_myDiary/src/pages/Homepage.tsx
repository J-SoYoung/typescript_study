import React from "react";
import { DiaryEdit, DiaryList } from "../components/index";

export const Homepage = () => {
  const diaryList = [
    {
      id: 1,
      author: "이정환",
      content: "하이1",
      emotion: 5,
      created_date: new Date().getTime(),
    },
    {
      id: 2,
      author: "이정환",
      content: "하이2",
      emotion: 5,
      created_date: new Date().getTime(),
    },
    {
      id: 3,
      author: "이정환",
      content: "하이3",
      emotion: 5,
      created_date: new Date().getTime(),
    },
  ];

  return (
    <>
      <DiaryEdit />
      <DiaryList />
    </>
  );
};
