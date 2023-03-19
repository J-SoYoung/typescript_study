import { FC, useState } from "react";

export enum HairColor {
  Blonde = "your hair is blonde, goot for you",
  Brown = " Cool hair color",
  Pink = "Wow that is so cool",
}
export interface Props {
  name: string;
  age: number;
  email: string;
  hairColor: HairColor;
}

export const Person: FC<Props> = ({ name, age, email, hairColor }) => {
  const [country, setCountry] = useState<string | null>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <p>
        이름 : {name}[{age}], {email}
      </p>
      나라 : <input
        type="text"
        placeholder="write down your country"
        onChange={handleChange}
      />
      {` ${country}`}
      <p>내 머리색은 {hairColor}</p>
    </div>
  );
};
