import React from "react";
import "./Counter.css";

export const Counter = ({ num, text }) => {
  return (
    <div className="counter" title="Counter" role="article">
      {text ? (
        <p>
          <strong>{text}</strong>:
        </p>
      ) : null}
      <p>{num}</p>
    </div>
  );
};
