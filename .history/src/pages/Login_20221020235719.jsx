import React, { useState } from 'react'
import logo from '../assets/loginLogo.png' 
import {Link} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const[password,setPassword]=useState('');
    const {connectWallet} = useContext(AuthContext);
    const {address}=useContext(AuthContext);
    const navigate=useNavigate();
    const callApi= ()=>{
        
        axios({
            method: 'post',
            url: 'http://localhost:8000/api/v1/auth/login',
            data: {
              wallet: address,

            }
          }).then(resp=>{
            console.log("responseee:",resp.data.token);
            localStorage.setItem('tokenId',resp.data.token);
            navigate('/');

        })
          .catch(err=>{console.log("errorr",err)})
    }

  return (
    <>
    <div className='w-full h-screen  bg-slate-900'>
        <div className='flex flex-col h-screen justify-center'>
            <center>
                <img className='w-16 h-16' src={logo} />
            </center>
            <center className='text-white text-3xl pt-3 font-semibold'>
                <h1>IPCRE8</h1>
            </center>
            {/* <center className='pt-2'>
                <input className=' w-56 p-1 px-3 text-sm  text-white border-none bg-slate-700' type="text" autocomplete="off" placeholder='Username '/>
            </center> */}
            {/* <center className='text-white text-3xl pt-3 font-semibold'>
                <h3>{address}</h3>
            </center> */}
            <center className='pt-2'>
                <input className=' w-56 p-1 text-sm border-collapse px-3 text-white  bg-slate-700' type="text" value={address} disabled autocomplete="off" />
            </center>
            <center className='pt-2'>
                <input className=' w-56 p-1 text-sm border-collapse px-3 text-white  bg-slate-700' type="password" autocomplete="off" value={password} onChange={setPassword()} placeholder='Password '/>
            </center> 
            <center className='pt-2'>
                { 
                address?
                <input className='w-56 p-1 font-semibold  text-lg hover:bg-blue-500 text-white bg-blue-400 cursor-pointer' type="submit" onClick={callApi} value='Login' />
               :
               <input className='w-56 p-1 font-semibold  text-lg hover:bg-blue-500 text-white bg-blue-400 cursor-pointer' type="submit" onClick={connectWallet} value='Connect To Wallet' />

               }
                    </center>
                  
            <center className="pt-2 text-white ">
                <Link  to='/register'>Register Now</Link>
            </center>
        </div>
    </div>
    </>
  )
}

export default Login