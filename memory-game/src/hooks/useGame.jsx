import { useEffect, useState } from "react";

export const GAME_STATES = {
  WINNED: "WINNED",
  GAME_OVER: "GAME_OVER",
  DEFAULT: "DEFAULT",
  PAUSED: "PAUSED",
};

// to do handle winner when all pairs are flipped
export const useGame = ({ timer, remainingPairsCounter, moveCounter }) => {
  const [started, setStarted] = useState(false);
  const [isActive, setGameActive] = useState(true);
  const [state, setGameState] = useState(GAME_STATES.DEFAULT);
  const allPairsDiscovered =
    remainingPairsCounter?.counter === 0 && moveCounter.counter > 5;

  const timeFinished = timer?.timeFinished;

  const pause = () => {
    setGameActive(false);
    setGameState(GAME_STATES.PAUSED);
    timer.pause();
  };
  const start = () => {
    setGameActive(true);
    setStarted(true);
    setGameState(GAME_STATES.DEFAULT);
    timer.restart();
  };

  const handleGameOver = () => {
    setGameState(GAME_STATES.GAME_OVER);
  };
  const handleGameWinned = () => {
    setGameState(GAME_STATES.WINNED);
  };

  const handleGameState = () => {
    if (allPairsDiscovered) {
      setTimeout(() => {
        handleGameWinned();
      }, 500);
    } else {
      setTimeout(() => {
        handleGameOver();
      }, 200);
    }
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
      handleGameState();
    }
  }, [allPairsDiscovered]);

  return {
    isActive,
    pause,
    start,
    state,
    started,
  };
};
