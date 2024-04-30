import { useState } from 'react'
//LOGO DEL COLEGIO
import './App.css'
import MusicGame from './Components/MusicGame'
import Footer from './Components/Footer'


function App() {

  return (
    <>
      <h1>PLAY THE PIANO</h1>
      <MusicGame />
      <Footer creator="BT Miranda" />
    </>
  )
}

export default App
