import { useEffect, useState } from "react";
import { AnimalCards } from "../bd/AnimalCards";
import { shuffleArrayFisherYates } from "../utils/shuffleArrayFisherYates";

const duplicateCards = (arr) => [...arr, ...arr];
const sliceArray = (arr, end) => arr.slice(0, end);
const addCardIds = (arr) => arr.map((card) => ({ ...card, id: Math.random() }));

const getCards = (level) => {
  let cards = [];
  const cardsTotal = parseInt(level?.total, 0) / 2;
  const cardsShuffled = shuffleArrayFisherYates(AnimalCards);
  cards = sliceArray(cardsShuffled, cardsTotal);
  cards = duplicateCards(cards);
  cards = addCardIds(cards);
  cards = shuffleArrayFisherYates(cards);

  return cards;
};

export const useCards = ({ level }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const cardArr = getCards(level);
    setCards(cardArr);
  }, [level]);

  return {
    cards,
  };
};
