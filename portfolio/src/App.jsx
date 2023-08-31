import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import lightstyles from "./styles/light.module.scss";
import darkstyles from "./styles/dark.module.scss";
import ParticleBackground from './components/particles'

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
