import React from "react";

interface GreekProps {
  name: string;
  messageCount: number;
  isLogin: boolean;
}

export const Greek = (props: GreekProps) => {
  return (
    <div>
      <h4>
      isLogin값에 따라 동적으로 바뀌는 UI : 
        {props.isLogin
          ? ` Welcome! ${props.name}! you have ${props.messageCount} unread message.`
          : ` 안녕, I am GUEST, `}
      </h4>
    </div>
  );
};
