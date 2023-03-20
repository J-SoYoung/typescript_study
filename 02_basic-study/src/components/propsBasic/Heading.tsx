import React from "react";
// 컴포넌트 사이의 text를 넣어 children으로 데이터 출력하기
interface HeadingProps {
  children: string;
}

export const Heading = (props: HeadingProps) => {
  return <h2>{props.children}</h2>;
};
