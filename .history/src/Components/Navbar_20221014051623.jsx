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
import metaLogo from '../assets/metamask.png';
import Logo from '../assets/logo.png';

const Navbar = () => {
    const[nav,setNav]=useState(false);
    const handleNav=()=>{
        setNav(!nav);
    }
  return (
    <>
        <div className='w-full h-[50px] bg-slate-600' >
            <div className='w-full  flex  mx-auto px-4 justify-between items-center h-full'>
           <div ><img src={Logo} className='w-6 h-5'/></div>
            <div className='hidden md:flex fl '>
                <ul className='flex text-white text-center'>
                <li className='p-2'></li>
                    <li className='px-1  inline-flex items-center '><AiFillHome className=' text-xl'/></li>
                    <li className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900'><MdCall className='mx-1 text-xl'/>Call</li>
                    <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><HiOutlineMail className='mx-1 text-xl'/> Email</li>
                    <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><BsPaperclip className='mx-1 text-xl'/>Whitepaper</li>
                    <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><TbFiles className='mx-1 text-xl'/>Register Patents</li>
                    <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><MdLocalFireDepartment className='mx-1 text-xl'/>Our Ecosystem</li>
                    <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><HiUsers className='mx-1 text-xl'/>Resources</li>
                    <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><FaYinYang className='mx-1 text-xl'/>Our Tokenomics</li>
                    <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900'  ><img src={ethlogo} className='w-3 h-4 mr-1'/>Pool(Testing)</li>
                    <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><img src={metaLogo} className='w-4 h-4 mr-1'/>Add IP 2 MetaMask</li>

                </ul>
            </div>
          
            <div className='hidden md:block text-white cursor-pointer hover:text-red-900'> <BiLogIn className='mx-1 text-xl inline-flex'/>Login</div>
            <div onClick={handleNav} className='block lg:hidden '>
                {nav? <AiOutlineClose size={30} className='text-white'/>:<AiOutlineMenu size={30} className='text-white'/>}
            </div>
            </div>
        </div>
    </>
  )
}

export default Navbar