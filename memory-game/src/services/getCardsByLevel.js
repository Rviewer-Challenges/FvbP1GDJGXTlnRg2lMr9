import { AnimalCards } from "../bd/AnimalCards";
import { addIdToArrayObject } from "../utils/addIdToArrayObject";
import { duplicateArray } from "../utils/duplicateArray";
import { shuffleArrayFisherYates } from "../utils/shuffleArrayFisherYates";
import { sliceArrayByStartEnd } from "../utils/sliceArrayByStartEnd";

const getCardsTotal = (level) => parseInt(level?.total, 0) / 2;

export const getCardsByLevel = (level) => {
    if (!level) return [];
    let cards = [];
    const cardsTotal = getCardsTotal(level);
    const cardsShuffled = shuffleArrayFisherYates(AnimalCards);
    cards = sliceArrayByStartEnd(cardsShuffled, 0, cardsTotal);
    cards = duplicateArray(cards);
    cards = addIdToArrayObject(cards);
    cards = shuffleArrayFisherYates(cards);

    return cards;
};
