import { useState } from "react";

const levels = [
  {
    level: "easy",
    board: "4x4 board",
    total: 16,
    id: 1,
  },
  {
    level: "medium",
    board: "4x6 board",
    total: 24,
    id: 2,
  },
  {
    level: "difficult",
    board: "5x6 board",
    total: 30,
    id: 3,
  },
];

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
    levels,
    handleLevel,
    resetLevel,
  };
};
