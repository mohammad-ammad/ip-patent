import React from 'react'
import Landing from './Components/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Rigister from './pages/Rigister';
import InputForm from './pages/InputForm';
import MintingPage from './pages/MintingPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
    <Route path='/' element={ <Landing/>} />
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Rigister/>}/>
    <Route path='/inputform' element={<InputForm/>}/>
    {/* <Route path='/wallet' element={<Wallet/>}/> */}
    <Route path='/mint' element={<MintingPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App