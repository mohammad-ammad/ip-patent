import React from 'react'
import {MdCall} from 'react-icons/md';
import { AiOutlineTwitter,AiFillHome,AiOutlineInstagram} from 'react-icons/ai';
import {HiOutlineMail} from 'react-icons/hi';
import {BsPaperclip} from 'react-icons/bs';
import {BiMessageDots} from 'react-icons/bi';
import {RiSendPlaneFill} from 'react-icons/ri'
import {DiGithubBadge} from 'react-icons/di'

const Footer = () => {
  return (
  <>
           <div className='w-full flex   h-[50px]  justify-end mt-auto bg-[#343D46] border   border-b border-gray-900 ' >
          <div className='flex'>
          <ul className='flex flex-wrap text-white '>
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