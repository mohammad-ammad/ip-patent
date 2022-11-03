import React from 'react'
import Landing from './Components/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Rigister from './pages/Rigister';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={ <Landing/>} />
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Rigister/>}/>
    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App