import React from "react";

export default function GameCol(props) {
  console.log(props.onClick);
  return (
    <div onClick={props.onClick} className="game-col">
      <h5>{props.value}</h5>
    </div>
  );
}
