import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu,AiFillHome} from 'react-icons/ai';
import {MdCall} from 'react-icons/md';

import {BiBell} from 'react-icons/bi'

const Navbar = () => {
    const[nav,setNav]=useState(false);
    const handleNav=()=>{
        setNav(!nav);
    }
  return (
    <>
        <div className='w-full h-[50px] bg-slate-600' >
            <div className='max-w-[1240px] md:justify-start flex mx-auto px-4 justify-between items-center h-full'>
           <div ><BiBell/></div>
            <div className='hidden md:flex'>
                <ul className='flex text-white text-center'>
                <li className='p-2'></li>
                    <li className='p-2 inline-flex items-center '><AiFillHome/></li>
                    <li className='p-2 inline-flex items-center'><MdCall/>Call</li>
                    <li  className='p-2 '  >Email</li>
                    <li  className='p-2 ' >Whitepaper</li>
                    <li  className='p-2 ' >Register Patents</li>
                    <li  className='p-2 ' >Our Ecosystem</li>
                    <li  className='p-2 ' >Resources</li>
                    <li  className='p-2 ' >Our Tokenomics</li>
                    <li  className='p-2 '  >Pool(Testing)</li>
                    <li  className='p-2 ' >Add IP 2 MetaMask</li>

                </ul>
            </div>
            <div onClick={handleNav} className='block md:hidden'>
                {nav? <AiOutlineClose size={30} className='text-white'/>:<AiOutlineMenu size={30} className='text-white'/>}
            </div>
            </div>
        </div>
    </>
  )
}

export default Navbar