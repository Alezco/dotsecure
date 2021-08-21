import {useEffect, useRef, useState} from 'react';

export const useInterval = (callback, delay) => {
  const [intervalId, setIntervalId] = useState();
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    }

    if (delay !== null) {
       const id = setInterval(tick, delay);
       setIntervalId(id);
       return () => clearInterval(id);
    }
  }, [delay]);

  return intervalId;
}
