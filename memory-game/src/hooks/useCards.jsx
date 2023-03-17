import { useEffect, useState } from "react";
import { getCardsByLevel } from "../services/getCardsByLevel";

export const useCards = ({ level, moveCounter, remainingPairsCounter }) => {
  const [cards, setCards] = useState([]);
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
      }, 800);
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    const cardArr = getCardsByLevel(level);
    setCards(cardArr);
  }, [level]);

  return {
    cards,
    cardsDisabled,
    handleChoice,
    checkIfCardIsSelected,
  };
};
