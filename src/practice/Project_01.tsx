// import React from "react";

const Project_01 = () => {
  const name: string = "Julius";
  const age: number = 29;
  const isMarried: boolean = false;

  //   declaring type of a parameter
  // declaring what a function is expected to return e.g number, string, void, any or null
  // here it's returning a number
  const getName = (name: string): number => {
    if (name === "Julus") {
      return 29;
    } else {
      return 0;
    }
  };

  return (
    <div style={{ margin: "10rem 5rem" }}>
      <p>{name}</p>
      <p>{age}</p>
      <p>{isMarried}</p>
      <p>{getName("Julus")}</p>
    </div>
  );
};

export default Project_01;
