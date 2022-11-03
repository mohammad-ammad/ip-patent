import React from 'react'

const Login = () => {
  return (
    <>
    <div className='w-full h-screen  bg-slate-900'>
        <div className='flex flex-col h-screen justify-center'>
            <center className='text-white text-2xl'>
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