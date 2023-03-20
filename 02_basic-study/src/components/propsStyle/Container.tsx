import React from "react";
// 스타일을 props로 넘겨줄 때 사용하는 type
interface ContainerProps {
  styles: React.CSSProperties;
}

export const Container = ({ styles }: ContainerProps) => {
  return <div style={styles}>Text content goes here , style CSS </div>;
};
