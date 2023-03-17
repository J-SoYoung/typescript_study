import React from "react";

interface PersonProps {
  name: {
    first: string;
    last: string;
  };
}

export const Introduce = (props: PersonProps) => {
  return (
    <div>
      {props.name.first}, {props.name.last}
    </div>
  );
};
