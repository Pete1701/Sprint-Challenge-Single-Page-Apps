import React from "react";

export default function CharacterCard(props) {
  return (
  // <span>todo: character</span>
    <div>
      <img src={props.image} alt='' />
      <h3>{props.name}</h3>
    </div>   
  );
};
