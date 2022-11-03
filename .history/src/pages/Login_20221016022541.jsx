import React from 'react'
import logo from '../assets/loginLogo.png' 
const Login = () => {
  return (
    <>
    <div className='w-full h-screen  bg-slate-900'>
        <div className='flex flex-col h-screen justify-center'>
            <center>
                <img className='w-16 h-16' src={logo} />
            </center>
            <center className='text-white text-4xl pt-4'>
                <h1>IPCRE8</h1>
            </center>
            <center>
                <input type="text" placeholder='Enter Your Name '/>
            </center>
            <center>
                <input type="password" placeholder='Enter Your Password '/>
            </center>
            <center>
                <a href='#' >Register Now</a>
            </center>
            <center>
                <input type="submit" value='Submit' />
            </center>
        </div>
    </div>
    </>
  )
}

export default Login