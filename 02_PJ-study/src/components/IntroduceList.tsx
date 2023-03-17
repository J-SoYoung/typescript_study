import React from "react";

interface PersonProps {
  names: {
    first: string;
    last: string;
  }[];
}

export const IntroduceList = (props: PersonProps) => {
  console.log(props);
  return (
    <>
      {props.names.map((name, index) => {
        return (
          <p key={index}>
            {name.first}, {name.last}
          </p>
        );
      })}
    </>
  );
};
