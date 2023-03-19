import React, { useRef, useState } from "react";
import styled from "styled-components";
import { DiaryState } from "../type/mainType";

interface onCreateProps {
  onCreate: ({ name, content, emotion }: DiaryState) => void;
}

export const DiaryEdit = ({ onCreate }: onCreateProps) => {
  // console.log(onCreate);
  const nameInput = useRef<HTMLInputElement>(null);
  const contentInput = useRef<HTMLTextAreaElement>(null);

  const [state, setState] = useState<DiaryState>({
    name: "",
    content: "",
    emotion: "happy",
  });

  const onChangeValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitDiary = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.name === "" || state.name.length < 2) {
      alert("작성자는 2자 이상으로 작성해주세요");
      nameInput.current?.focus();
      return;
    }
    if (state.content === "" || state.content.length < 5) {
      alert("일기는 5자 이상으로 작성해주세요");
      contentInput.current?.focus();
      return;
    }
    onCreate({ name: state.name, content: state.content, emotion: state.emotion });
    setState({
      name: "",
      content: "",
      emotion: "happy",
    });
  };

  return (
    <div>
      <Title>오늘의 일기</Title>
      <ArticleForm onSubmit={onSubmitDiary}>
        <Section>
          <input
            ref={nameInput}
            type="text"
            name="name"
            placeholder="일기 작성자는 누구세요?"
            value={state.name || ""}
            onChange={onChangeValue}
          />
        </Section>
        <Section>
          <textarea
            ref={contentInput}
            name="content"
            placeholder="일기를 작성해주세요"
            value={state.content || ""}
            onChange={onChangeValue}
          />
        </Section>
        <Section>
          <div>
            오늘의 감정점수&nbsp;:&nbsp;
            <select name="emotion" value={state.emotion || ""} onChange={onChangeValue}>
              <option value={"happy"}>happy</option>
              <option value={"lovely"}>lovely</option>
              <option value={"funny"}>funny</option>
              <option value={"smile"}>smile</option>
            </select>
          </div>
        </Section>
        <Button type="submit">일기 저장하기</Button>
      </ArticleForm>
    </div>
  );
};

const ArticleForm = styled.form`
  background-color: #eeebeb;
  padding: 16px;
  box-sizing: border-box;
`;
const Section = styled.section`
  width: 100%;
  margin-bottom: 16px;
  & > input,
  textarea {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  border: 1px solid #aaaaaa;
  background-color: white;
  :hover {
    background-color: #dad4d4;
  }
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin: 16px 0;
`;
