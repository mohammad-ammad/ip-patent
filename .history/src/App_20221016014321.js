import React from 'react'
import Landing from './Components/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element= <Landing/>
    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App