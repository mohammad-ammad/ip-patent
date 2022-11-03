import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu,AiFillHome} from 'react-icons/ai';
import {MdCall} from 'react-icons/md';
import {HiOutlineMail} from 'react-icons/hi';
import {BiBell} from 'react-icons/bi'
import {BsPaperclip} from 'react-icons/bs';
import {TbFiles} from 'react-icons/tb';
import {MdLocalFireDepartment} from 'react-icons/md';
import {HiUsers} from 'react-icons/hi';
import {FaYinYang} from 'react-icons/fa';
import {BiLogIn} from 'react-icons/bi';
import ethlogo from '../assets/eth.png';
const Navbar = () => {
    const[nav,setNav]=useState(false);
    const handleNav=()=>{
        setNav(!nav);
    }
  return (
    <>
        <div className='w-full h-[50px] bg-slate-600' >
            <div className='max-w-[1240px] sm:justify-start flex mx-auto px-4 justify-between items-center h-full'>
           <div ><BiBell/></div>
            <div className='hidden md:flex'>
                <ul className='flex text-white text-center'>
                <li className='p-2'></li>
                    <li className='px-1  inline-flex items-center '><AiFillHome /></li>
                    <li className='px-1 inline-flex items-center text-sm'><MdCall className='mx-1 text-xl'/>Call</li>
                    <li  className='px-1 inline-flex items-center text-sm' ><HiOutlineMail className='mx-1 text-xl'/> Email</li>
                    <li  className='px-1 inline-flex items-center text-sm' ><BsPaperclip className='mx-1 text-xl'/>Whitepaper</li>
                    <li  className='px-1 inline-flex items-center text-sm' ><TbFiles className='mx-1 text-xl'/>Register Patents</li>
                    <li  className='px-1 inline-flex items-center text-sm' ><MdLocalFireDepartment className='mx-1 text-xl'/>Our Ecosystem</li>
                    <li  className='px-1 inline-flex items-center text-sm' ><HiUsers className='mx-1 text-xl'/>Resources</li>
                    <li  className='px-1 inline-flex items-center text-sm' ><FaYinYang className='mx-1 text-xl'/>Our Tokenomics</li>
                    <li  className='px-1 inline-flex items-center text-sm'  ><img src={ethlogo} className='w-2'/>Pool(Testing)</li>
                    <li  className='px-1 inline-flex items-center text-sm' >Add IP 2 MetaMask</li>

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