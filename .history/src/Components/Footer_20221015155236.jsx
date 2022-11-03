import React from 'react'
import {MdCall} from 'react-icons/md';
import { AiOutlineTwitter,AiFillHome,AiOutlineInstagram} from 'react-icons/ai';
import {HiOutlineMail} from 'react-icons/hi';
import {BsPaperclip} from 'react-icons/bs';
import {TbFiles} from 'react-icons/tb';
import {MdLocalFireDepartment} from 'react-icons/md';
import {HiUsers} from 'react-icons/hi';
import {FaYinYang} from 'react-icons/fa';
import {BiLogIn,BiMessageDots} from 'react-icons/bi';
import {RiSendPlaneFill} from 'react-icons/ri'
import {DiGithubBadge} from 'react-icons/di'

const Footer = () => {
  return (
  <>
           <div className='w-full flex justify-end mt-[500px] bg-slate-600 border   border-b border-gray-900 ' >
          <div className='flex '>
          <ul className='flex md:my-3 md:justify-evenly md:items-center md:flex-wrap text-white text-center'>
          <li className='px-1  inline-flex items-center '><AiFillHome className=' text-xl'/></li>
          <li className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900'><MdCall className='mx-1 text-xl'/></li>
          <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><HiOutlineMail className='mx-1 text-xl'/> </li>
          <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><BsPaperclip className='mx-1 text-xl'/></li>
          <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><BiMessageDots className='mx-1 text-xl'/></li>
          <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><AiOutlineTwitter className='mx-1 text-xl'/></li>
          <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><RiSendPlaneFill className='mx-1 text-xl'/></li>
          <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><DiGithubBadge className='mx-1 text-xl'/></li>
          <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><AiOutlineInstagram className='mx-1 text-xl'/></li>

          </ul>
          </div>
</div>
  </>
  )
}

export default Footer