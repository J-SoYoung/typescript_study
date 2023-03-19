import styled from "styled-components";
import { DiaryItemProps } from "../type/mainType";

export const DiaryItem = ({diary}: DiaryItemProps) => {
  return (
    <SectionItem>
      <p>작성자 : {diary.name}</p>
      <p>오늘의 감정 : {diary.emotion}</p>
      <p>작성 일자 : {diary.created_date}</p>
      <div>{diary.content}</div>
    </SectionItem>
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
