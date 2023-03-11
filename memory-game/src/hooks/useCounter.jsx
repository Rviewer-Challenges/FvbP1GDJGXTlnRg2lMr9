import { useEffect, useState } from "react";

export const useCounter = (num) => {
  console.log("num", num);
  const [counter, setCounter] = useState(num);

  const increase = () => {
    setCounter(counter + 1);
  };

  const reset = () => {
    setCounter(0);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    setCounter(num);
  }, [num]);

  return {
    increase,
    counter,
    reset,
    decrease,
  };
};
