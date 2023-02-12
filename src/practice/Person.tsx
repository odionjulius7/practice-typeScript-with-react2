import { FC, ChangeEvent, useState } from "react";

// enum is used to give one give optional choice
export enum hairColor {
  blue = "Great blue color",
  green = "Great green color",
  yellow = "Great yellow color",
}

// interface Props {
// we can make all optional, so even if we don't pass a prop from the parent to th comp. it won't give error
//   name?: string;
//   email?: string;
//   age?: number;
//   getAge?: (age: number) => number; // returns number and accept a params of age
// }
interface Props {
  name: string;
  email: string;
  age: number;
  hairColor: hairColor; // you can use enum in props
}

// my FC takes in a type Props that describes our props object shape
const Person: FC<Props> = ({ name, email, age, hairColor }) => {
  // the country state is of typr STRING or could be NULL
  const [country, setCountry] = useState<string | null>("");

  //   onChange needs to give the type of event to carry out, e.g any,
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  // Type is use for choosing between options

  // type nameType = "Julius" | "John";
  // const nameForType: nameType = "John";

  return (
    <div>
      <h1> {name}</h1>
      <h1> {age}</h1>
      <h1>{email}</h1>
      <input
        name="country"
        placeholder="Write down your country..."
        onChange={handleChange}
      />
      {country}
      <h6>{hairColor}</h6>
    </div>
  );
};

export default Person;
