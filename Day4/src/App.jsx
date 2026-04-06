import { useState } from 'react'

export default function App() {
  let [count, setCount] = useState(0);

  function incrementNumber() {
    count++;
    setCount(count);
  }

  return (
    <>
      <p>Counter : {count}</p>
      <button onClick={incrementNumber}>Increment</button>
    </>
  )
}