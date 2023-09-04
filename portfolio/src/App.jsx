import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import lightstyles from "./styles/light.module.scss";
import darkstyles from "./styles/dark.module.scss";
import { AnimatePresence } from "framer-motion";
import Portfolio from './pages/portfolio'
import Preloader from './components/preloader'

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <AnimatePresence mode='wait'>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/portfolio" element={<Portfolio />}></Route>
            </Routes>
          </AnimatePresence>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
