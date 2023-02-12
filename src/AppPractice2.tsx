import { FC, createContext } from "react";
import "./App.css";

// you can as well create a separate folder for ENUMs, INTERFACES and TYPES fr a better folder structure
interface AppContextInterface {
  //  readonly name: string; read only help strickly avoid the property from being changed
  name: string;
  age: number;
  email: string;
}

const AppContext = createContext<AppContextInterface | null>(null);

// export interface IAppProps {}

// working with context API and typeScript
const AppPractice2: FC = () => {
  const calculateTax = (income: number, taxYear = 2022): number => {
    if (taxYear < 2023) return income * 10;
    // else return another number value when income is greater than 5000, to avoid func returning undefined
    return income * 21;
  };
  //   we either over ride the value or leave i at 2022
  console.log(calculateTax(60000));

  const contextValue: AppContextInterface = {
    name: "Julius",
    age: 29,
    email: "odionjulius7@mail.com",
  };
  //   contextValue.name = "hhgh"

  return (
    <AppContext.Provider value={contextValue}>
      <div>hi</div>
    </AppContext.Provider>
  );
};

export default AppPractice2;
