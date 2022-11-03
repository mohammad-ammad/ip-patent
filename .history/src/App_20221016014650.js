import React from 'react'
import Landing from './Components/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={ <Landing/>} />
    <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App