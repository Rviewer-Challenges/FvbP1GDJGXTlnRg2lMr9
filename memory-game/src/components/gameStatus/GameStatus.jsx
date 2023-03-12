import React from "react";
import { ReactComponent as SadFace } from "./../../assets/svg/reactions/sad-face.svg";
import { ReactComponent as Happy } from "./../../assets/svg/reactions/happy.svg";

import "./GameStatus.css";

export const GameStatus = ({ game }) => {
  console.log("game GameStatus", game);
  return (
    <div className="gameStatus">
      <div className="gameStatus-message">
        {!game.started ? (
          <button onClick={game.start}>Start</button>
        ) : game?.result === "gameOver" ? (
          <>
            <SadFace />
            <h2>Game over</h2>
            <button>Try again</button>
          </>
        ) : game?.result === "gameWinned" ? (
          <>
            <Happy />
            <h2>Winner</h2>
            <button>Shuffle cards</button>
          </>
        ) : (
          <>
            <h2>Game paused</h2>
            <button onClick={game.start}>Start</button>
          </>
        )}
      </div>
    </div>
  );
};
