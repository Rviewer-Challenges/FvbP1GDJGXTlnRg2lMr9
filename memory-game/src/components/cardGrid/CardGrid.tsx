import React from 'react';
import { useCards } from '../../hooks/useCards';
import { useLevel } from '../../hooks/useLevel';
import "./CardGrid.css"

export const CardGrid = () => {
    const {level} = useLevel();
    const {cards} = useCards({level: level});
    console.log("level", level);
    console.log("cards", cards)
  return (
    <div className="cardGrid">CardGrid</div>
  )
}
