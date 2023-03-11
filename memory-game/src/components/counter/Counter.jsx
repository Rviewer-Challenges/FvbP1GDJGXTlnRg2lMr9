import React from "react";
import "./Counter.css";

export const Counter = ({ num, text }) => {
  return (
    <div>
      {text ? <h2>{text}</h2> : null}
      <p>{num}</p>
    </div>
  );
};
