import React from "react";
import "./Card.css";

export const Card = ({ card, handleChoice, isSelected }) => {
  return (
    <div className={`flip-card ${isSelected && "selected"}`}>
      <div className="flip-card-inner">
        <div className="flip-card-back">{card.svg}</div>
        <div className="flip-card-front" onClick={() => handleChoice(card)}>
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  );
};
