import React from "react";
import { useCardContext } from "../../context/gameContext";
import { useCards } from "../../hooks/useCards";
import { Card } from "../card/Card";
import { GameStatus } from "../gameStatus/GameStatus";
import { Grid } from "../grid/Grid";
import "./CardGrid.css";

export const CardGrid = ({ moveCounter, remainingPairsCounter, game }) => {
  const { cards } = useCardContext();
  const { cardsDisabled, checkIfCardIsSelected, handleChoice } = useCards({
    moveCounter: moveCounter,
    remainingPairsCounter: remainingPairsCounter,
  });

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
