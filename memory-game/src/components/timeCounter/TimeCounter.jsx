import React from "react";
import "./TimeCounter.css";

export const TimeCounter = ({ timer }) => {
  const fewSecondsLeft = timer?.time?.second < 5 && timer?.time?.minute <= 0;
  return (
    <div
      className={`timeCounter ${fewSecondsLeft && "countdown"}`}
      role="article"
      title="Time counter"
    >
      <p>
        <strong>Time:</strong>
      </p>
      <span>
        {timer?.time?.minute}:{timer?.time?.second}
      </span>
    </div>
  );
};
