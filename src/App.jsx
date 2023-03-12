import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Iframe from 'react-iframe'


function App() {

  return (
    <div className="App">

      <Iframe url="aframe.html"
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"/>


    </div>
  )
}

export default App
