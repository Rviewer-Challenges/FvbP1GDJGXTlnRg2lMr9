import React from "react";
import { useLevelContext } from "../../context/gameContext";
import "./Grid.css";

export const Grid = ({ children, className }) => {
  const { selectedLevel } = useLevelContext();

  return (
    <div className={`grid ${selectedLevel.level} ${className}`}>{children}</div>
  );
};
