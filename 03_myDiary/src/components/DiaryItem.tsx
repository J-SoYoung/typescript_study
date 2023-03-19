import React, { useState, useRef } from "react";
import styled from "styled-components";
import { DiaryData } from "../type/mainType";

export interface DiaryItemProps {
  diary: DiaryData;
  onRemove: (id: number) => void;
  onEdit: ({
    id,
    editContent,
  }: {
    id: number;
    editContent:string
  }) => void;
}
export const DiaryItem = ({ diary, onRemove, onEdit }: DiaryItemProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editContent, setEditContent] = useState<string>(diary.content);

  const handleClickRemove = (id: number) => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleClickEdit = (id: number) => {
    if (window.confirm(`${id}번째 일기를 정말 수정하시겠습니까?`)) {
      onEdit({ id, editContent })
      setIsEdit(false);
    }
  };

  return (
    <>
      <SectionItem>
        <>
          <p>작성자 : {diary.name}</p>
          <p>오늘의 감정 : {diary.emotion}</p>
          <p>작성 일자 : {diary.today}</p>
          {isEdit ? (
            <div>
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                style={{ width: "100%" }}
              />
            </div>
          ) : (
            <div>{diary.content}</div>
          )}
        </>
        {isEdit ? (
          <>
            <button
              onClick={() => {
                setIsEdit(false);
              }}
            >
              수정취소
            </button>
            <button
              onClick={() => {
                handleClickEdit(diary.id);
              }}
            >
              수정완료
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                handleClickRemove(diary.id);
              }}
            >
              삭제하기
            </button>
            <button
              onClick={() => {
                setIsEdit(!isEdit);
              }}
            >
              수정하기
            </button>
          </>
        )}
      </SectionItem>
    </>
  );
};
const SectionItem = styled.section`
  margin-bottom: 16px;
  padding: 16px;
  box-sizing: border-box;
  background-color: #eeebeb;
  & > p {
    margin-bottom: 8px;
    font-size: 14px;
  }
  & > div {
    margin: 10px 0;
    padding: 16px;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 20px;
    background-color: white;
    border-radius: 8px;
  }
`;
