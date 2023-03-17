import React from "react";
import { ReactComponent as CardBack } from "./../../assets/svg/concentration.svg";

import "./Card.css";

export const Card = ({ card, handleChoice, isSelected, disabled }) => {
  return (
    <article title="Memory card" className={`card ${isSelected && "selected"}`}>
      <div className="card__inner">
        <div className="card__back">{card?.svg}</div>
        <div
          className="card__front"
          onClick={() => !disabled && handleChoice(card)}
        >
          <CardBack />
        </div>
      </div>
    </article>
  );
};
