import { useEffect, useState } from "react";

// to do handle winner when all pairs are flipped
export const useGame = ({ timer, remainingPairsCounter }) => {
  const [isActive, setGameActive] = useState(true);
  const [result, setGameResult] = useState("default");
  const allPairsDiscovered =
    remainingPairsCounter.initialized && remainingPairsCounter.counter === 0;
  const timeFinished = timer?.timeFinished;
  console.log("remainingPairsCounter", remainingPairsCounter);
  console.log("allPairsDiscovered", allPairsDiscovered);
  const pause = () => {
    setGameActive(false);
    timer.pause();
  };
  const start = () => {
    setGameActive(true);
    timer.restart();
  };

  const handleGameOver = () => setGameResult("gameOver");
  const handleGameWinned = () => setGameResult("gameWinned");

  const handleGameState = () => {
    allPairsDiscovered ? handleGameWinned() : handleGameOver();
  };

  useEffect(() => {
    if (timeFinished) {
      pause();
      handleGameState();
    }
  }, [timeFinished]);

  useEffect(() => {
    if (allPairsDiscovered) {
      pause();
    }
  }, [allPairsDiscovered]);

  return {
    isActive,
    pause,
    start,
    result,
  };
};
