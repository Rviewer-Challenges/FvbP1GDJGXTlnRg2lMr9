import React from "react";
import { ReactComponent as CardBack } from "./../../assets/svg/concentration.svg";

import "./Card.css";

export const Card = ({ card, handleChoice, isSelected, disabled }) => {
  return (
    <article
      title="Memory card"
      className={`flip-card ${isSelected && "selected"}`}
    >
      <div className="flip-card-inner">
        <div className="flip-card-back">{card?.svg}</div>
        <div
          className="flip-card-front"
          onClick={() => !disabled && handleChoice(card)}
        >
          <CardBack />
        </div>
      </div>
    </article>
  );
};
