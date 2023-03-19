import React, { useState, useRef } from "react";
import { DiaryEdit, DiaryList } from "../components/index";
import { DiaryData, DiaryListProps, DiaryState } from "../type/mainType";

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

  const onRemove = (id: number): void => {
    const newList = diaryList?.diaryList.filter((d) => {
      return d.id !== id;
    });
    console.log(newList);
    setDiaryList({ diaryList: newList });
  };

  const onEdit = ({ id, editContent }: { id: number; editContent: string }): void => {
    const editItem = diaryList.diaryList.map((d: any) =>
      d.id === id ? { ...d, content: editContent } : d,
    );
    console.log("home", id, editContent);
    setDiaryList({ diaryList: editItem });
  };

  return (
    <>
      <DiaryEdit onCreate={onCreate} />
      <DiaryList diaryList={diaryList} onRemove={onRemove} onEdit={onEdit} />
    </>
  );
};
