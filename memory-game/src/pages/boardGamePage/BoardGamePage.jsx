import React, { useState } from "react";
import { CardGrid } from "../../components/cardGrid/CardGrid";
import { Counter } from "../../components/counter/Counter";
import { TimeCounter } from "../../components/timeCounter/TimeCounter";
import { useCardContext, useLevelContext } from "../../context/gameContext";
import { useCountDown } from "../../hooks/useCountDown";
import { useCounter } from "../../hooks/useCounter";

import "./BoardGamePage.css";

export const BoardGamePage = () => {
  const { resetLevel, selectedLevel } = useLevelContext();
  const { cards } = useCardContext();
  const [gameActive, setGameActive] = useState(true);
  const timer = useCountDown({ counter: 60 });
  const pairs = cards?.length && cards.length / 2;
  const moveCounter = useCounter(0);
  const remainingPairsCounter = useCounter(pairs);

  const pauseGame = () => {
    setGameActive(false);
    timer.pause();
  };
  const startGame = () => {
    setGameActive(true);
    timer.restart();
  };

  return (
    <div className="boardGamePage">
      <h1>BoardGamePage {selectedLevel.level}</h1>
      <div className="boardGamePage__info">
        <div>
          <button onClick={() => resetLevel()}>Change Level</button>
        </div>
        <div>
          {gameActive ? (
            <button onClick={() => pauseGame()}>Pause Game</button>
          ) : (
            <button onClick={() => startGame()}>Start Game</button>
          )}
        </div>
        <Counter num={moveCounter.counter} text={"move counter"} />
        <Counter
          num={remainingPairsCounter.counter}
          text={"Remaining pairs counter"}
        />
        <TimeCounter timer={timer} />
      </div>
      <CardGrid
        gameActive={gameActive}
        moveCounter={moveCounter}
        remainingPairsCounter={remainingPairsCounter}
      />
    </div>
  );
};
