import React from "react";
import "./GameStatus.css";

export const GameStatus = ({ game }) => {
  console.log("game GameStatus", game);
  return (
    <div className="gameStatus">
      <div className="gameStatus-message">
        {game?.result === "gameOver" ? (
          <h2>Game over</h2>
        ) : game?.result === "gameWinned" ? (
          <h2>Winner</h2>
        ) : (
          <h2>Game paused</h2>
        )}
      </div>
    </div>
  );
};
