import React from "react";

interface PersonProps {
  names: {
    first: string;
    last: string;
  }[];
}

export const IntroduceList = (props: PersonProps) => {
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
