import React from "react";

const getCards = (level) => {};

export const useCards = ({ level }) => {
  const cards = getCards(level);
  return {
    cards,
  };
};
