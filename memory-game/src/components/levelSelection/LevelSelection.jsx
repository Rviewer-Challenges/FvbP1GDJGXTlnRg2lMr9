import React from "react";
import { useLevelContext } from "../../context/gameContext";
import "./LevelSelection.css";

export const LevelSelection = () => {
  const { handleLevel, levels } = useLevelContext();
  return (
    <section className="levelSelection">
      <ul className="levelSelection__content">
        {levels?.length
          ? levels.map((level, i) => (
              <li
                key={level.id}
                className="levelSelection__content-level"
                onClick={() => handleLevel(level)}
              >
                <h2>{level.level.toUpperCase()}</h2>
                <p>{level.board}</p>
              </li>
            ))
          : null}
      </ul>
    </section>
  );
};
