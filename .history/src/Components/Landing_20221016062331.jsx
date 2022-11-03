import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Video from './Video'
import '../App.css';
import InputForm from '../pages/InputForm';

const Landing = () => {
  return (
    <>
   
    <Video>
    <Navbar/>
    <InputForm/>
    <Footer/>
    </Video>
   
    </>
  )
}

export default Landing