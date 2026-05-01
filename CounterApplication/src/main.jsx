import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Timer from './Timer.jsx'
createRoot(document.getElementById('root')).render(
  <Timer/>
)
