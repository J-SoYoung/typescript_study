import { FC } from "react";

export interface Props2 {
  name: string;
  age: number;
  email: string;
}

export const Person2: FC<Props2> = ({ name, age, email }) => {
  return (
    <div>
      <h1>
        {name}, {age}
      </h1>
      <h1>{email}</h1>
    </div>
  );
};
