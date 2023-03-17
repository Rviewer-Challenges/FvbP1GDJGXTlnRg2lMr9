import React from "react";
import "./TimeCounter.css";

export const TimeCounter = ({ timer }) => {
  const fewSecondsLeft = timer?.time?.second < 5 && timer?.time?.minute <= 0;
  return (
    <article
      className={`timeCounter ${fewSecondsLeft && "countdown"}`}
      title="Time counter"
    >
      <p>
        <strong>Time: </strong>
        <span>
          {timer?.time?.minute}:{timer?.time?.second}
        </span>
      </p>
    </article>
  );
};
