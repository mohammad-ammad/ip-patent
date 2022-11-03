import React, { useState } from 'react'

const InputForm = () => {
    
  return (
    <>
        <div className='grid grid-cols-3  md:grid-cols-4 '>
        <h1 className= 'flex justify-center text-white text-3xl '>Input form </h1>
        <form className='mt-20 flex'>
        <div className='grid-cols-1 gap-4'>
        <label class="  block ">
        <span class="block text-sm font-medium text-white">Username</span>
        <input type="text" placeholder='name'  class="mt-1 w-56 block  px-3 py-2 bg-transparent text-white  rounded-md text-sm  placeholder-slate-400
       focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
    "/>
  </label>
  </div>
  <label class=" grid-cols-2 block ">
        <span class="block text-sm font-medium text-white">Username</span>
        <input type="text" placeholder='name'  class="mt-1 w-56 block  px-3 py-2 bg-transparent text-white  rounded-md text-sm  placeholder-slate-400
       focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
    "/>
  </label>
 
</form>
        </div>
    </>
  )
}

export default InputForm