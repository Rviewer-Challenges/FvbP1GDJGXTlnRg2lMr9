import React from "react";
import { useLevelContext } from "../../context/gameContext";
import "./LevelSelection.css";

export const LevelSelection = () => {
  const { handleLevel, levels } = useLevelContext();
  // to do what role should this component have?
  return (
    <section className="levelSelection" title="Level selection" role="region">
      <ul className="levelSelection__content">
        {levels?.length
          ? levels.map((level) => (
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
