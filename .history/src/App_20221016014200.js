import React from 'react'
import Landing from './Components/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Landing/>
    </BrowserRouter>
    </>
    
  )
}

export default App