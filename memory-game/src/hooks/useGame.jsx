import { useState } from "react";

export const useGame = () => {
  const [gameState, setGameState] = useState("default");

  const handleGameOver = () => setGameState("gameOver");
  const handleGameWinned = () => setGameState("gameWinned");

  return {
    gameState,
    handleGameWinned,
    handleGameOver,
  };
};
