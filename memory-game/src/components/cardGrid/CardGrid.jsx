import React from "react";
import { useCardContext } from "../../context/gameContext";
import { useCards } from "../../hooks/useCards";
import { GAME_STATES } from "../../hooks/useGame";
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
        {game.state !== GAME_STATES.DEFAULT ? <GameStatus game={game} /> : null}
        {cards?.length
          ? cards.map((card, i) => (
              <Card
                disabled={cardsDisabled || game.state !== GAME_STATES.DEFAULT}
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
