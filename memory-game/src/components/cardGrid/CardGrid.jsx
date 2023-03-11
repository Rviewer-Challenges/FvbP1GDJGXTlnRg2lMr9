import React, { useEffect, useState } from "react";
import { useCardContext } from "../../context/gameContext";
import { Card } from "../card/Card";
import { Grid } from "../grid/Grid";
import "./CardGrid.css";

export const CardGrid = ({ moveCounter, remainingPairsCounter }) => {
  const { cards } = useCardContext();
  const [discoveredCards, setDiscoveredCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

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
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne?.name === choiceTwo?.name) {
        setDiscoveredCards([...discoveredCards, choiceOne.id, choiceTwo.id]);
        remainingPairsCounter.decrease();
      }
      setTimeout(() => {
        resetTurn();
      }, 1000);
    }
  }, [choiceOne, choiceTwo]);

  return (
    <>
      <Grid className="cardGrid">
        {cards?.length
          ? cards.map((card, i) => (
              <Card
                key={i}
                card={card}
                handleChoice={handleChoice}
                isSelected={checkIfCardIsSelected(card.id)}
              />
            ))
          : null}
        <div className="cardGrid"></div>
      </Grid>
    </>
  );
};
