import { useState } from "react";

export const useLevel = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  return {
    selectedLevel,
    setSelectedLevel,
  };
};
