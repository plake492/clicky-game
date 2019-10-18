import React from "react";

export default function Navbar(props) {
  return (
    <div className="nav">
      <div className="nav__title">
        <p>Clicky Game</p>
      </div>
      <div className="nav__title">
        <p>{props.message}</p>
      </div>
      <div className="nav__title">
        <p>Score: {props.click} | Top Score: 0</p>
      </div>
    </div>
  );
}
