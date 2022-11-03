import React from 'react'
import {MdCall} from 'react-icons/md';
import { AiOutlineTwitter,AiFillHome,AiOutlineInstagram} from 'react-icons/ai';
import {HiOutlineMail} from 'react-icons/hi';
import {BsPaperclip} from 'react-icons/bs';
import {BiMessageDots} from 'react-icons/bi';
import {RiSendPlaneFill} from 'react-icons/ri'
import {DiGithubBadge} from 'react-icons/di'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
  <>
           <div className='w-full flex fixed  h-[50px]   justify-end bottom-0 bg-[#343D46] border   border-b border-gray-900 ' >
          <div className='flex'>
          <ul className='flex flex-wrap text-white '>
            <li className='px-1  inline-flex items-center '><Link to='/'>  <AiFillHome className=' text-xl'/></Link></li>
          <li className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900'><a href="#"> <MdCall className='mx-1 text-xl'/></a></li>
          <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><a href='https://mail.google.com/'> <HiOutlineMail className='mx-1 text-xl'/></a> </li>
          <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><a href='https://www.cre8.wtf/documents/whitepaper.pdf'><BsPaperclip className='mx-1 text-xl'/></a></li>
          <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><a href='https://discord.com/login?redirect_to=%2Fchannels%2F955818237231247410%2F955818237231247414'><BiMessageDots className='mx-1 text-xl'/></a></li>
          <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><a href='https://twitter.com/account/access'><AiOutlineTwitter className='mx-1 text-xl'/></a></li>
          <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><a href='https://t.me/ipcre8'><RiSendPlaneFill className='mx-1 text-xl'/></a></li>
          <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><a href='https://github.com/flashaahaaa/cre8'><DiGithubBadge className='mx-1 text-xl'/></a></li>
          <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><a href='https://www.instagram.com/cre8ip/'><AiOutlineInstagram className='mx-1 text-xl'/></a></li>

          </ul>
          </div>
</div>
  </>
  )
}

export default Footer