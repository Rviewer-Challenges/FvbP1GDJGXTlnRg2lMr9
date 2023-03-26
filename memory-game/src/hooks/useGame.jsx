import { useEffect, useState } from "react";

export const GAME_STATES = {
  INITIAL: "INITIAL",
  DEFAULT: "DEFAULT",
  PAUSED: "PAUSED",
  WINNED: "WINNED",
  GAME_OVER: "GAME_OVER",
};

export const useGame = ({ timer, remainingPairsCounter, moveCounter }) => {
  const [state, setGameState] = useState(GAME_STATES.INITIAL);
  const allPairsDiscovered =
    remainingPairsCounter?.counter === 0 && moveCounter.counter > 5;
  const timeFinished = timer.time.seconds === 0;

  const pause = () => {
    setGameState(GAME_STATES.PAUSED);
    timer.pause();
  };

  const start = () => {
    setGameState(GAME_STATES.DEFAULT);
    timer.start();
  };

  const reset = () => {
    setGameState(GAME_STATES.INITIAL);
    timer.reset();
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
    pause,
    start,
    state,
    reset,
  };
};
