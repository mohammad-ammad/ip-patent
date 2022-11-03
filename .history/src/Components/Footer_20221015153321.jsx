import React from 'react'
import {MdCall} from 'react-icons/md';
import {HiOutlineMail} from 'react-icons/hi';
import {BsPaperclip} from 'react-icons/bs';
import {TbFiles} from 'react-icons/tb';
import {MdLocalFireDepartment} from 'react-icons/md';
import {HiUsers} from 'react-icons/hi';
import {FaYinYang} from 'react-icons/fa';
import {BiLogIn} from 'react-icons/bi';

const Footer = () => {
  return (
  <>
           <div className='w-full md:h-auto lg:h-[50px] mt-[500px] bg-slate-600 border   border-b border-gray-900 ' >
          <div className='flex'>
          <ul className='flex md:my-3 md:justify-evenly md:items-center md:flex-wrap text-white text-center'>
                <li className='p-2'></li>
                    <li className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900'><MdCall className='mx-1 text-xl'/>Call</li>
                    <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><HiOutlineMail className='mx-1 text-xl'/> Email</li>
          </ul>
          </div>
</div>
  </>
  )
}

export default Footer