import React from "react";

const Character = props => {
  console.log("Character");
  return <li>{props.character.name}</li>;
};

export default Character;
