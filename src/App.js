import React, { useState, useEffect } from 'react';
import './style.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleReset = () => {
    setCount(0);
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handlePlay = () => {
    setIsRunning(true);
  };


  return (
    <div className="counter">
      <h1 className="counter-title">Counter: {count}</h1>
      <button className="counter-btn reset" onClick={handleReset}>
        Reset
      </button>
      {isRunning ? (
        <button className="counter-btn pause" onClick={handlePause}>
          Pause
        </button>
      ) : (
        <button className="counter-btn play" onClick={handlePlay}>
          Play
        </button>
      )}

    </div>
  );
};

export default Counter;
