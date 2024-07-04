import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

import Footer from './Components/Footer'
import About_us from './Components/About_us'
import Contact from './Components/Contact'
import Menu from './Components/Menu'

export default function App() {
  

  return (
    <>
      <Navbar/>
      <Home/>
      
      <About_us/>
      <Menu/>
      <Contact/>
      <Footer/>
    </>
  )
}

