import React, { Component } from 'react'
import Landing from './Components/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Rigister from './pages/Rigister';
import InputForm from './pages/InputForm';
import MintingPage from './pages/MintingPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Protected from './Components/Protected';
import MarketPlace from './Marketplace/Pages/MarketPlace';
import Detail from './Marketplace/Pages/Detail';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <ToastContainer theme='dark'/>
    <Routes>
    <Route path='/' element={ <Protected Component={Landing}/>} />
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Rigister/>}/>
    <Route path='/inputform' element={<Protected Component={InputForm}/>}/>
    <Route path='/mint' element={<Protected Component={MintingPage}/>}/>
    <Route path='/marketplace/' element={<Protected Component={MarketPlace}/>}/>
    <Route path='/detail' element={<Protected Component={Detail}/>}/>

    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App