import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import './global.css'


function App() {


  return (
    <>
      <Header />
      <div className="body-grid">
        <About />
      </div>
    </>
  )
}

export default App
