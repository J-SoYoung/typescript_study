import React from "react";
import "../App.css";

// subTitle의 컴포넌트 안에 또다른 컴포넌트의 child를 가져올때
// React.ReactNode 타입은 유용하게 쓰이므로 알아두기
interface SubHeadProps {
  children: React.ReactNode;
}

export const SubHead = (props: SubHeadProps) => {
  return <div className="subtitle">{props.children}</div>;
};
