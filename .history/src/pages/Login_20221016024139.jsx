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
            <center className='text-white text-3xl pt-4'>
                <h1>IPCRE8</h1>
            </center>
            <center className='pt-3'>
                <input className=' w-52 p-1 px-3 text-sm text-white border-none bg-slate-700' type="text" placeholder='Username '/>
            </center>
            <center className='pt-3'>
                <input className=' w-52 p-1 text-sm border-collapse px-3 text-white border-none bg-slate-700' type="password" placeholder='Password '/>
            </center>
            <center className='pt-3'>
                <input className='w-52 p-1 text-lg text-white bg-blue-400 ' type="submit" value='Submit' />
            </center>
            <center className="pt-3">
                <a href='#' >Register Now</a>
            </center>
        </div>
    </div>
    </>
  )
}

export default Login