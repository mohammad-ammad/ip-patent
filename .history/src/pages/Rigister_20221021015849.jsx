import React from 'react'
import logo from '../assets/loginLogo.png' 
import { AuthContext } from '../context/AuthContext';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const Rigister = () => {
    const {connectWallet} = useContext(AuthContext);
    const {address}=useContext(AuthContext);
    const navigate=useNavigate();

  return (
    <>
     <div className='w-full h-screen  bg-slate-900'>
        <div className='flex flex-col h-screen justify-center'>
            <center>
                <img className='w-16 h-16' src={logo} />
            </center>
            <center className='text-white text-3xl pt-3 font-semibold'>
                <h1>Register here</h1>
            </center>
            <center className='pt-2'>
                <input className=' w-56 p-1 px-3 text-sm   text-white border-none bg-slate-700' type="text" autocomplete="off" placeholder='name '/>
            </center>
            <center className='pt-2'>
                <input className=' w-56 p-1 px-3 text-sm  text-white border-none bg-slate-700' type="gmail"  autocomplete="off" placeholder='Gmail'/>
            </center>
            <center className='pt-2'>
                <input className=' w-56 p-1 text-sm border-collapse px-3 text-white  bg-slate-700' type="password"  autocomplete="off" placeholder='Password '/>
            </center>
            <center className='pt-2'>
                <input className=' w-56 p-1 text-sm border-collapse px-3 text-white  bg-slate-700' type="password"  autocomplete="off" placeholder='Re-Enter Password '/>
            </center>
            {/* <center className='pt-2'>
                <input className='w-56 p-1 font-semibold  text-lg hover:bg-blue-500 text-white bg-blue-400 cursor-pointer' type="submit" value='SignUp' />
            </center> */}

            <center className='pt-2'>
                { 
                address?
                <input className='w-56 p-1 font-semibold  text-lg hover:bg-blue-500 text-white bg-blue-400 cursor-pointer' type="submit" onClick={callApi} value='SignUp' />
               :
               <input className='w-56 p-1 font-semibold  text-lg hover:bg-blue-500 text-white bg-blue-400 cursor-pointer' type="submit" onClick={connectWallet} value='Connect To Wallet' />

               }
                    </center>
          
        </div>
    </div>
    </>
  )
}

export default Rigister