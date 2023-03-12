import { useEffect, useState } from "react";

export const useCounter = (num) => {
  const [counter, setCounter] = useState(num);
  const [initialized, setIsInitialized] = useState(false);

  const increase = () => {
    setCounter(counter + 1);
  };

  const reset = () => {
    setCounter(0);
    setIsInitialized(false);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    setCounter(num);
    setIsInitialized(true);
  }, [num]);

  return {
    increase,
    counter,
    reset,
    decrease,
    initialized,
  };
};
