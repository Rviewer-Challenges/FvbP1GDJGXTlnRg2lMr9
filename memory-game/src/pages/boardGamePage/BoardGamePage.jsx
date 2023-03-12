import React from "react";
import { CardGrid } from "../../components/cardGrid/CardGrid";
import { Counter } from "../../components/counter/Counter";
import { TimeCounter } from "../../components/timeCounter/TimeCounter";
import { useCardContext, useLevelContext } from "../../context/gameContext";
import { useCountDown } from "../../hooks/useCountDown";
import { useCounter } from "../../hooks/useCounter";
import { useGame } from "../../hooks/useGame";

import "./BoardGamePage.css";

export const BoardGamePage = () => {
  const { resetLevel, selectedLevel } = useLevelContext();
  const { cards } = useCardContext();
  const timer = useCountDown({ counter: 60 });
  const pairs = cards?.length && cards.length / 2;
  const moveCounter = useCounter(0);
  const remainingPairsCounter = useCounter(pairs);
  const game = useGame({
    timer: timer,
    remainingPairsCounter: remainingPairsCounter,
  });

  return (
    <div className="boardGamePage">
      <h1>
        Level: <span>{selectedLevel.level}</span>
      </h1>
      <div className="boardGamePage__info">
        <div>
          <button onClick={() => resetLevel()}>Change Level</button>
        </div>
        <div>
          {game.isActive ? (
            <button onClick={() => game.pause()}>Pause Game</button>
          ) : (
            <button onClick={() => game.start()}>Start Game</button>
          )}
        </div>
        <Counter num={moveCounter.counter} text={"Moves"} />
        <Counter num={remainingPairsCounter.counter} text={"Remaining pairs"} />
        <TimeCounter timer={timer} />
      </div>
      <CardGrid
        game={game}
        moveCounter={moveCounter}
        remainingPairsCounter={remainingPairsCounter}
      />
    </div>
  );
};
