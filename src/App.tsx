import { useState, FC } from "react";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";
// import Project_01 from "./practice/Project_01";
import Person from "./practice/Person";
import { hairColor } from "./practice/Person";

// always set an type(definition) interface to describe your data and what is expected in it
export interface IState {
  // this expects a type of people array of objects and with keys of string, numbers no boolean
  people: {
    name: string;
    age: number;
    img: string;
    note?: string; // this is either string or optional
  }[];
}

// we are making use of (FC) functional component
const App: FC = () => {
  // people here is our type set in the interface
  // this is how it declared here
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 35,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      img: "https://fullpresscoverage.com/wp-content/uploads/2020/01/101524695-457220551.jpg",
    },
  ]);

  return (
    <div className="App">
      <Person
        name="Julius"
        age={29}
        email="odionjulius7@gmail.com"
        hairColor={hairColor.blue}
      />
      <h1>People Invited to my Party</h1>
      {/* <Project_01 /> */}
      <List people={people} />
      <AddToList setPeople={setPeople} people={people} />
    </div>
  );
};

export default App;
