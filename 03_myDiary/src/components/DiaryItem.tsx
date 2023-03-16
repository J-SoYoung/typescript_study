import React from "react";
import styled from "styled-components";

export const DiaryItem = () => {
  return (
    <SectionItem>
      <p>작성자</p>
      <p>오늘의 감정</p>
      <p>작성 일자</p>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quod, voluptatibus quos
        excepturi quam nemo doloremque doloribus consectetur tenetur perferendis placeat, aliquid
        ratione harum in facere odio nulla, animi dolorem.
      </div>
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
