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
            <center className='pt-2'>
                <input className=' w-56 p-1 px-3 text-sm text-white border-none bg-slate-700' type="text" placeholder='Username '/>
            </center>
            <center className='pt-2'>
                <input className=' w-56 p-1 text-sm border-collapse px-3 text-white border-none bg-slate-700' type="password" placeholder='Password '/>
            </center>
            <center className='pt-2'>
                <input className='w-56 p-1 text-lg hover:bg-blue-400 text-white bg-blue-300 cursor-pointer' type="submit" value='Submit' />
            </center>
            <center className="pt-2">
                <a className='text-white' href='#' >Register Now</a>
            </center>
        </div>
    </div>
    </>
  )
}

export default Login