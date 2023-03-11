import React from "react";
import "./Card.css";

export const Card = ({ card, handleChoice, isSelected }) => {
  return (
    <div className={`flip-card ${isSelected && "selected"}`}>
      <div className="flip-card-inner">
        <div className="flip-card-back">{card.svg}</div>
        <div className="flip-card-front" onClick={() => handleChoice(card)}>
          <p>xxxx</p>
        </div>
      </div>
    </div>
  );
};
