import { useEffect, useState } from "react";

export const useCountDown = ({ counter }) => {
  const [time, setTime] = useState({
    second: "00",
    minute: "01",
    counter: counter ? counter : 60,
  });
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = time.counter % 60;
        const minuteCounter = Math.floor(time.counter / 60);

        const computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        const computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;
        setTime((prevState) => ({
          second: computedSecond,
          minute: computedMinute,
          counter: prevState.counter - 1,
        }));
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, time]);

  const pause = () => setIsActive(false);
  const restart = () => setIsActive(true);
  const timeFinished =
    parseInt(time.second, 0) <= 0 && parseInt(time.minute, 0) <= 0;

  useEffect(() => {
    timeFinished && pause();
  }, [timeFinished]);

  return {
    pause,
    time,
    isActive,
    restart,
    timeFinished,
  };
};
