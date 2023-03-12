import React from "react";
import { LevelSelection } from "../../components/levelSelection/LevelSelection";
import "./LevelSelectionPage.css";

export const LevelSelectionPage = () => {
  return (
    <div className="levelSelectionPage">
      <h1>Choose your level</h1>
      <LevelSelection />
    </div>
  );
};
