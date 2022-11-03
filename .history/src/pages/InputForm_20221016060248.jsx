import React, { useState } from 'react'

const InputForm = () => {
    
  return (
    <>
        <div className='grid grid-cols-3 md:grid-cols-4 '>
        <form className=' flex justify-center mt-10'>
        <label class=" grid-cols-1 block ">
            <h1 className='text-white text-3xl '>Input form </h1>
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