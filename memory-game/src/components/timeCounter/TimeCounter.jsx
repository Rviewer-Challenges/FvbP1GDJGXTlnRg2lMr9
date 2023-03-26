import React from "react";
import "./TimeCounter.css";

export const TimeCounter = ({ timer }) => {
  let time = timer?.time;
  const fewSecondsLeft = time?.second < 5 && time?.minute <= 0;

  return time ? (
    <article
      className={`timeCounter ${fewSecondsLeft && "countdown"}`}
      title="Time counter"
    >
      <p>
        <strong>Time: </strong>
        <span role="timer">
          <span>
            {time?.minutes}:
            {time?.seconds === 60
              ? "00"
              : time?.seconds === 0
              ? "00"
              : time?.seconds}
          </span>
        </span>
      </p>
    </article>
  ) : null;
};
