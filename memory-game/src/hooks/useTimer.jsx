export const useTimer = () => {
  const [timer, setTimer] = useState(second);
  return {
    timer,
  };
};
