import React from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
}

// when accepting a props we also need to define the props type we are expectig
// which here is a people type which is an array of object
const List: React.FC<IProps> = ({ people }) => {
  //
  //
  //
  // with type script we define what we want to retun which is
  // a JSX array element
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img className="List-img" src={person.img} />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
