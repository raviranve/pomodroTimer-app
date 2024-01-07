import React, { useState, useEffect } from 'react';
import "../App.css"
const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [Active, setActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval;

    if (Active) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            // Timer is complete, switch to break
            setActive(false);
            setIsBreak(!isBreak);
            setMinutes(isBreak ? 25 : 5);
          } else {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prev) => prev - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [Active, seconds, minutes, isBreak]);

  const resetTimer = () => {
    setActive(false);
    setIsBreak(false);
    setMinutes(25);
    setSeconds(0);
  };

  const toggleTimer = () => {
    setActive(!Active);
  };

  return (
    <>
    <div>
      <h1>{isBreak ? 'Break Time' : 'Pomodoro Time'}</h1>
      <p className='time'>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </p>
      <button className='btn' onClick={toggleTimer}>{Active ? 'Pause' : 'Start'}</button>
      <button className='btn' onClick={resetTimer}>Reset</button>
    </div>
    </>  
  );
};

export default PomodoroTimer;