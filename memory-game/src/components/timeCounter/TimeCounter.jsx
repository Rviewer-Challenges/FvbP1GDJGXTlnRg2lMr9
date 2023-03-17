import React from "react";
import "./TimeCounter.css";

export const TimeCounter = ({ timer }) => {
  let time = timer?.time;
  const fewSecondsLeft = time?.second < 5 && time?.minute <= 0;
  // const defaultTime = {
  //   minute: "01",
  //   second: "00",
  // };

  // time = time ? time : defaultTime;

  return (
    <article
      className={`timeCounter ${fewSecondsLeft && "countdown"}`}
      title="Time counter"
    >
      <p>
        <strong>Time: </strong>
        <span role="timer">
          {time?.minute}:{time?.second}
        </span>
      </p>
    </article>
  );
};
