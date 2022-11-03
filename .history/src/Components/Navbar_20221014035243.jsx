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
                    <li className='p-2 inline-flex items-center text-sm'><AiFillHome /></li>
                    <li className='p-2 inline-flex items-center'><MdCall className='mx-1 text-xl'/>Call</li>
                    <li  className='p-2 inline-flex items-center' ><HiOutlineMail className='mx-1 text-xl'/> Email</li>
                    <li  className='p-2 inline-flex items-center' ><BsPaperclip className='mx-1 text-xl'/>Whitepaper</li>
                    <li  className='p-2 inline-flex items-center' ><TbFiles className='mx-1.5 text-xl'/>Register Patents</li>
                    <li  className='p-2 inline-flex items-center' ><MdLocalFireDepartment className='mx-1.5 text-xl'/>Our Ecosystem</li>
                    <li  className='p-2 inline-flex items-center' ><HiUsers className='mx-1.5 text-xl'/>Resources</li>
                    <li  className='p-2 inline-flex items-center' ><FaYinYang className='mx-1.5 text-xl'/>Our Tokenomics</li>
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