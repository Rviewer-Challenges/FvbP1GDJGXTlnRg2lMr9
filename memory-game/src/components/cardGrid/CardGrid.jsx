import React, { useEffect, useState } from "react";
import { useCardContext } from "../../context/gameContext";
import { Card } from "../card/Card";
import { GameStatus } from "../gameStatus/GameStatus";
import { Grid } from "../grid/Grid";
import "./CardGrid.css";

export const CardGrid = ({ moveCounter, remainingPairsCounter, game }) => {
  const { cards } = useCardContext();
  const [discoveredCards, setDiscoveredCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [cardsDisabled, setCardDisabled] = useState(false);

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const checkIfCardIsSelected = (id) =>
    choiceOne?.id === id ||
    choiceTwo?.id === id ||
    discoveredCards.includes(id);

  const resetTurn = () => {
    setChoiceTwo(null);
    setChoiceOne(null);
    moveCounter.increase();
    setCardDisabled(false);
  };

  const handleHits = () => {
    setDiscoveredCards([...discoveredCards, choiceOne.id, choiceTwo.id]);
    remainingPairsCounter.decrease();
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setCardDisabled(true);
      if (choiceOne?.name === choiceTwo?.name) {
        handleHits();
      }
      setTimeout(() => {
        resetTurn();
      }, 1000);
    }
  }, [choiceOne, choiceTwo]);

  return (
    <>
      <Grid className="cardGrid">
        {!game.isActive ? <GameStatus game={game} /> : null}
        {cards?.length
          ? cards.map((card, i) => (
              <Card
                disabled={cardsDisabled || !game.isActive}
                key={i}
                card={card}
                handleChoice={handleChoice}
                isSelected={checkIfCardIsSelected(card.id)}
              />
            ))
          : null}
      </Grid>
    </>
  );
};
