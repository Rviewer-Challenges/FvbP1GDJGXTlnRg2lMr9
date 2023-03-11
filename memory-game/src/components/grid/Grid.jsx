import React from "react";
import { useLevelContext } from "../../context/gameContext";
import "./Grid.css";

export const Grid = ({ children }) => {
  const { selectedLevel } = useLevelContext();

  return <div className={`grid ${selectedLevel.level}`}>{children}</div>;
};
