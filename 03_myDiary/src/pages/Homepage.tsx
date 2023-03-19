import React, { useState, useRef } from "react";
import { DiaryEdit, DiaryList } from "../components/index";
import { DiaryListProps, DiaryState } from "../type/mainType";

export const Homepage = () => {
  const [diaryList, setDiaryList] = useState<DiaryListProps>();
  // const diaryList = [
  //   {
  //     id: 1,
  //     name: "정소영",
  //     content: "'diaryList' is assigned a value but never",
  //     emotion: "happy",
  //     created_date: "2023-03-17",
  //   },

  const dataId: React.MutableRefObject<number> = useRef(0);
  const onCreate = ({ name, content, emotion }: DiaryState) => {
    const created_date = new Date().getTime();
    const newItem = {
      name,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    // dataId += dataId.current + 1;
  };

  return (
    <>
      <DiaryEdit />
      <DiaryList diaryList={diaryList} />
    </>
  );
};
