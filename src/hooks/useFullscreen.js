import { useRef } from 'react';
import { useState } from 'react';

const useFullscreen = (callback) => {
  const [isFull, setIsFull] = useState(false);
  const element = useRef();

  const triggerFull = () => {
    if (element.current && !isFull) {
      element.current.requestFullscreen();
      setIsFull(true);
      if (callback && typeof callback === 'function') {
        callback(true);
      }
    }
  };

  const exitFull = () => {
    if (isFull) {
      document.exitFullscreen();
      setIsFull(false);
      if (callback && typeof callback === 'function') {
        callback(false);
      }
    }
  };

  return { element, triggerFull, exitFull };
};

export default useFullscreen;
