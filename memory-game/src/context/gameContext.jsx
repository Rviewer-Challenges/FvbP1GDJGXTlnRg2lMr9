import React, { useContext } from "react";
import { useCards } from "../hooks/useCards";
import { useLevel } from "../hooks/useLevel";

const CardContext = React.createContext();
const LevelContext = React.createContext();

export function useCardContext() {
  return useContext(CardContext);
}

export function useLevelContext() {
  return useContext(LevelContext);
}

export function GameProvider(props) {
  const { selectedLevel, handleLevel, levels, resetLevel } = useLevel();
  const { cards } = useCards({ level: selectedLevel });

  return (
    <CardContext.Provider value={{ cards }}>
      <LevelContext.Provider
        value={{ selectedLevel, handleLevel, levels, resetLevel }}
      >
        {props.children}
      </LevelContext.Provider>
    </CardContext.Provider>
  );
}
