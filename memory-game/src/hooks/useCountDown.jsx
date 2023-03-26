import { useEffect, useState } from "react";

// export const useCountDown = ({ counter }) => {
//   const [time, setTime] = useState({
//     second: "00",
//     minute: "01",
//     counter: counter ? counter : 60,
//   });
//   const [isActive, setIsActive] = useState(true);
//   const pause = () => setIsActive(false);
//   const restart = () => setIsActive(true);
//   const timeFinished =
//     parseInt(time.second, 0) <= 0 && parseInt(time.minute, 0) <= 0;

//   useEffect(() => {
//     let intervalId;
//     if (isActive) {
//       intervalId = setInterval(() => {
//         if (counter === 0) {
//           pause();
//         }
//         const secondCounter = time.counter % 60;
//         const minuteCounter = Math.floor(time.counter / 60);

//         const computedSecond =
//           String(secondCounter).length === 1
//             ? `0${secondCounter}`
//             : secondCounter;
//         const computedMinute =
//           String(minuteCounter).length === 1
//             ? `0${minuteCounter}`
//             : minuteCounter;

//         setTime((prevState) => ({
//           second: computedSecond,
//           minute: computedMinute,
//           counter: prevState.counter - 1,
//         }));
//       }, 1000);
//     }

//     return () => clearInterval(intervalId);
//   }, [isActive, time]);

//   useEffect(() => {
//     timeFinished && pause();
//   }, [timeFinished]);

//   console.log("time", time);

//   return {
//     pause,
//     time,
//     isActive,
//     restart,
//     timeFinished,
//   };
// };

export const useCountDown = () => {
  const [time, setTime] = useState({
    seconds: 60,
    minutes: 1,
  });
  const [isActive, setIsActive] = useState(false);

  const start = () => {
    setIsActive(true);
  };

  const pause = () => {
    setIsActive(false);
  };

  const reset = () => {
    setIsActive(false);
    setTime({
      seconds: 0,
      minutes: 1,
    });
  };

  useEffect(() => {
    let intervalId;

    if (isActive && time.seconds > 0) {
      intervalId = setInterval(() => {
        setTime((prevState) => {
          const seconds = prevState.seconds - 1;
          const minutes = 0;
          if (prevState.seconds === 0 && prevState.minutes === 0) {
            pause();
            return prevState;
          } else if (seconds < 0) {
            return {
              seconds: 59,
              minutes: minutes,
            };
          } else {
            return {
              ...prevState,
              seconds,
              minutes,
            };
          }
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, time]);

  return { start, pause, reset, time };
};
