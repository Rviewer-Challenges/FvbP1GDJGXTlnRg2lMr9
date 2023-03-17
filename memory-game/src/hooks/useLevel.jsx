import { useState } from "react";
import { levels } from "./../bd/Levels";

export const useLevel = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleLevel = (level) => {
    setSelectedLevel(level);
  };

  const resetLevel = () => {
    setSelectedLevel(null);
  };

  return {
    selectedLevel,
    handleLevel,
    resetLevel,
    levels,
  };
};
