import React from "react";
import { useLevel } from "../../hooks/useLevel";
import "./LevelSelection.css";

const LEVELS = [
  {
    level: "Easy",
    board: "4x4 board",
    id: 1,
  },
  {
    level: "Medium",
    board: "4x6 board",
    id: 2,
  },
  {
    level: "Difficult",
    board: "5x6 board",
    id: 3,
  },
];

export const LevelSelection = () => {
  const { selectedLevel, setSelectedLevel } = useLevel();
  console.log("selectedLevel", selectedLevel);

  return (
    <section className="levelSelection">
      <ul className="levelSelection__content">
        {LEVELS.map((level, i) => (
          <li
            key={level.id}
            className="levelSelection__content-level"
            onClick={() => setSelectedLevel(level.id)}
          >
            <h2>{level.level}</h2>
            <p>{level.board}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
