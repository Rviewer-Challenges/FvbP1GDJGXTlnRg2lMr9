import React from "react";
import { CardGrid } from "../../components/cardGrid/CardGrid";
import { Counter } from "../../components/counter/Counter";
import { useCardContext, useLevelContext } from "../../context/gameContext";
import { useCounter } from "../../hooks/useCounter";

import "./BoardGamePage.css";

export const BoardGamePage = () => {
  const { resetLevel } = useLevelContext();
  const { cards } = useCardContext();

  const pauseGame = () => {
    console.log("pause");
  };
  const pairs = cards?.length && cards.length / 2;
  const moveCounter = useCounter(0);
  const remainingPairsCounter = useCounter(pairs);

  return (
    <div className="boardGamePage">
      <h1>BoardGamePage</h1>
      <div className="boardGamePage__info">
        <div>
          <button onClick={() => resetLevel()}>Change Level</button>
        </div>
        <div>
          <button onClick={() => pauseGame()}>Pause Game</button>
        </div>
        <Counter num={moveCounter.counter} text={"move counter"} />
        <Counter
          num={remainingPairsCounter.counter}
          text={"Remaining pairs counter"}
        />
      </div>
      <CardGrid
        moveCounter={moveCounter}
        remainingPairsCounter={remainingPairsCounter}
      />
    </div>
  );
};
