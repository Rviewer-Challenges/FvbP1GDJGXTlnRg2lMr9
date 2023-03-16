import React from "react";
import "./Counter.css";

export const Counter = ({ num, text }) => {
  return (
    <article className="counter" title="Counter">
      <p>
        {text ? <strong>{text}</strong> : null}
        <span>{num}</span>
      </p>
    </article>
  );
};
