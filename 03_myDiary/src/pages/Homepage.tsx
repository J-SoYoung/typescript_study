import React, { useState, useRef } from "react";
import { DiaryEdit, DiaryList } from "../components/index";
import { DiaryData, DiaryListProps, DiaryState } from "../type/mainType";

interface NewItemType {
  name: string;
  content: string;
  emotion: string;
  created_date: number;
  id: number;
}

export const Homepage = () => {
  // const diaryList = [
  //   {
  //     id: 1,
  //     name: "정소영",
  //     content: "'diaryList' is assigned a value but never",
  //     emotion: "happy",
  //     created_date: "2023-03-17",
  //   }]

  const [diaryList, setDiaryList] = useState<DiaryListProps>({ diaryList: [] });

  const dataId: React.MutableRefObject<number> = useRef(0);
  const today = new Date().toLocaleString();
  const onCreate = ({ name, content, emotion }: DiaryState): void => {
    const newItem: DiaryData = {
      name,
      content,
      emotion,
      today,
      id: dataId.current,
    };
    dataId.current += 1;
    setDiaryList({ diaryList: [newItem, ...diaryList.diaryList] });
  };

  return (
    <>
      <DiaryEdit onCreate={onCreate} />
      <DiaryList diaryList={diaryList} />
    </>
  );
};
