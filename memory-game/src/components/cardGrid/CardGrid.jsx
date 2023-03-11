import React from "react";
import { useCardContext } from "../../context/gameContext";
import { Grid } from "../grid/Grid";
import "./CardGrid.css";

export const CardGrid = () => {
  const { cards } = useCardContext();

  console.log("cards CardGrid hhhhheeeellllooo", cards);

  return (
    <Grid className="cardGrid">
      {cards?.length
        ? cards.map((card, i) => (
            <div className="cardGrid__card" key={i}>
              {card.svg}
            </div>
          ))
        : null}
      <div className="cardGrid"></div>
    </Grid>
  );
};
