import { useEffect, useState } from "react";

// export const useTimer = ({ seconds }) => {
//   const [timeLeft, setTimeLeft] = useState(seconds);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTimeLeft((t) => t - 1);
//     }, 1000);
//     return () => clearInterval(intervalId);
//   }, []);

//   const stopTimer = () => {
//     console.log("stopTimer");
//   };

//   return {
//     timeLeft,
//     stopTimer,
//   };
// };

export const useCountDown = ({ counter }) => {
  const [time, setTime] = useState({
    second: "00",
    minute: "00",
    counter: counter ? counter : 60,
  });
  const [isActive, setIsActive] = useState(true);

  console.log("counter", time.counter);

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
        // setSecond(computedSecond);
        // setMinute(computedMinute);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, time]);

  const pause = () => setIsActive(false);
  const restart = () => setIsActive(true);
  return {
    pause,
    time,
    isActive,
    restart,
  };
};
