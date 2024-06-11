import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage/HomePage'
import Navbar from './components/Navbar/Navbar'
import useLocoScroll from './components/LocoMotive/useLocoScroll'

function App() {
  useLocoScroll(true);

  return (
    <div className='main smooth-scroll'>
       <Navbar/>
       <HomePage/>
    </div>
  )
}

export default App
