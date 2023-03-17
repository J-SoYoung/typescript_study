import React, { useState } from "react";
import { DiaryEdit, DiaryList } from "../components/index";

export const Homepage = () => {
  // const [diaryList, setDiaryList] = useState([]);
  const diaryList = [
    {
      id: 1,
      name: "정소영",
      content: "'diaryList' is assigned a value but never used  @typescript-eslint/no-unused-vars",
      emotion: "happy",
      created_date: "2023-03-17",
    },
    {
      id: 2,
      name: "김소영",
      content: "To ignore, add // eslint-disable-next-line to the line before.",
      emotion: "lovely",
      created_date: "2023-03-17",
    },
    {
      id: 3,
      name: "최소영",
      content: "webpack compiled with 1 warning",
      emotion: "smile",
      created_date: "2023-03-17",
    },
  ];

  return (
    <>
      <DiaryEdit />
      <DiaryList diaryList={diaryList} />
    </>
  );
};
