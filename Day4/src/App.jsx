import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

export default function App() {
  let count = 0;
  return (
    <>
      <p>Counter : {count}</p>
      <button id="increment">Increment</button>
    </>
  )
}