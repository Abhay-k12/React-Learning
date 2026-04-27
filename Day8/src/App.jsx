import { useEffect } from 'react';
import { useState } from 'react'
import { useRef } from 'react';

function App() {
  const [second, setSecond] = useState(0);
  const intervalId = useRef(null) ;

  function startTimer() {

    if(intervalId.current != null) {
      return;
    }

    intervalId.current = setInterval(()=> {
      setSecond(second=>second+1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalId.current);
    intervalId.current = null;
  }

  function resetTimer() {
    clearInterval(intervalId.current);
    intervalId.current = null;
    setSecond(0);
  }  
  
  return (
    <>
    <h1>Time: {second}</h1>
    <button onClick={startTimer}>Start</button>
    <button onClick={stopTimer}>Stop</button>
    <button onClick={resetTimer}>Reset</button>
    </>
  )
}

export default App
