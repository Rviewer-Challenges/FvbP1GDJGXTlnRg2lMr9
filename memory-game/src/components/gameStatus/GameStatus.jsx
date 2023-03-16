import React from "react";
import { ReactComponent as SadFace } from "./../../assets/svg/reactions/sad-face.svg";
import { ReactComponent as Happy } from "./../../assets/svg/reactions/happy.svg";
import { GAME_STATES } from "../../hooks/useGame";
import { useLevelContext } from "../../context/gameContext";

import "./GameStatus.css";

export const GameStatus = ({ game }) => {
  console.log("game GameStatus", game);
  const { resetLevel } = useLevelContext();
  console.log("game.started", game.started);
  return (
    <div className="gameStatus">
      <div className="gameStatus-message">
        {!game.started && game?.state === GAME_STATES.DEFAULT && (
          <>
            <h2>Ready?</h2>
            <button onClick={() => game.start()}>Start</button>
          </>
        )}

        {game?.state === GAME_STATES.GAME_OVER && (
          <>
            <SadFace />
            <h2>Game over</h2>
            <button onClick={() => resetLevel()}>Try again</button>
          </>
        )}

        {game?.state === GAME_STATES.WINNED && (
          <>
            <Happy />
            <h2>Winner</h2>
            <button onClick={() => resetLevel()}>Play again</button>
          </>
        )}

        {game?.state === GAME_STATES.PAUSED && (
          <>
            <h2>Game paused</h2>
            <button onClick={() => game.start()}>Start</button>
          </>
        )}
      </div>
    </div>
  );
};
