import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Video from './Video'

const Landing = () => {
  return (
    <>
    <Video/>
    <div className='absolute'>
    <Navbar/>
    <Footer/>
    </div>

    </>
  )
}

export default Landing