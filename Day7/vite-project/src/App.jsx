import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import heroImg from './assets/hero.png'
import Sum from './sum'
import Post from './post'

function App() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(100);

  let totalPrimeNumbers = React.useMemo(()=> {
    let total = 0;

    console.log("prime number executed")
    for(let i=2; i<=number; i++) {
      let flag =  true;

      for(let j=2; j<i; j++) {
        if(i%j===0) {
          flag = false;
          break;
        }
      }

      if(flag) {
        total += 1;
      }
    }

    return total;
  },[number]);

  let obj = React.useMemo(()=> {
    return {
      name:"Abhay Kanojia",
      age:"20"
    }
  },[]);

  const updatedClick = React.useCallback(()=> {
    console.log("Number Value:",number);    //it will always shows number = 100, untill number is passed into the dependency array.
  },[]);

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={()=>setCount(count+1)}> Increment </button>
      <Sum number={count}></Sum>
      
      <h1>Number: {number}</h1>
      <button onClick={()=>setNumber(number+1000)}> Increment </button>
      <h2>Total Prime Numbers: {totalPrimeNumbers}</h2>

      <button onClick={updatedClick}>Click</button>

      <Post value = {obj}></Post>
    </>
  )

  //Since Objects are always compared through their references, hence the post methis will be rendered again and adain as app renders,
  //So, we can store the object into useMemo, to aboid unnecessary calling.
}

export default App
