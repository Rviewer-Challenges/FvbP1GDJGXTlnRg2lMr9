import { useEffect, useState } from "react";

export const useCounter = (num) => {
  const [counter, setCounter] = useState(num);

  const increment = () => {
    setCounter(counter + 1);
  };

  const reset = () => {
    setCounter(0);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    setCounter(num);
  }, [num]);

  return {
    increment,
    counter,
    reset,
    decrement,
  };
};
