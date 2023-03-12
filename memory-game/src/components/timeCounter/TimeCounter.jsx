import React from "react";
import "./TimeCounter.css";

export const TimeCounter = ({ timer }) => {
  return (
    <>
      <div className="timeCounter">
        {timer?.time?.minute}:{timer?.time?.second}
      </div>
    </>
  );
};
