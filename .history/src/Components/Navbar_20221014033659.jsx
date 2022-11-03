import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu,AiFillHome} from 'react-icons/ai';
import {MdCall} from 'react-icons/md';
import {HiOutlineMail} from 'react-icons/hi';
import {BiBell} from 'react-icons/bi'
import {BsPaperclip} from 'react-icons/bs';
import {TbFiles} from 'react-icons/tb';
import {MdLocalFireDepartment} from 'react-icons/md';
import {HiUsers} from 'react-icons/hi'
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
                    <li  className='p-2 inline-flex items-center' ><HiOutlineMail/> Email</li>
                    <li  className='p-2 inline-flex items-center' ><BsPaperclip/>Whitepaper</li>
                    <li  className='p-2 inline-flex items-center' ><TbFiles/>Register Patents</li>
                    <li  className='p-2 inline-flex items-center' ><MdLocalFireDepartment/>Our Ecosystem</li>
                    <li  className='p-2 inline-flex items-center' ><Resources</li>
                    <li  className='p-2 inline-flex items-center' >Our Tokenomics</li>
                    <li  className='p-2 inline-flex items-center'  >Pool(Testing)</li>
                    <li  className='p-2 inline-flex items-center' >Add IP 2 MetaMask</li>

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