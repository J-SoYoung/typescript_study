import React from "react";
// string, number 등 데이터 타입 뿐만 아니라 지정 문자열을 정해줄 수도 있다
interface StatusProps {
  status: "loading" | "success" | "error";
}

export const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "...Loading";
  } else if (props.status === "success") {
    message = "Data fetched successfully";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return (
    <div>
      <h3>status - {message}</h3>
    </div>
  );
};
