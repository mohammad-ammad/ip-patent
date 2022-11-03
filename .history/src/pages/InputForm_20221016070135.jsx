import React, { useState } from 'react'

const InputForm = () => {
    
  return (
    <>
        <div className='min-h-screen py-20 bg-slate-900'>
            <div className='container mx-auto'>
                <h1 className=' flex text-white text-4xl justify-center'>Input form</h1>
                <div className='flex w-8/12 bg-slate-400 rounded-xl mx-auto shadow-lg overflow-hidden'>
                 
                  <div className='w-1/2 py-16 px-12 bg-slate-600 text-white'>
                  <form action='#'>
                    <div>
                    
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='firstname'  />
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='2nd'  />
                    </div>
                  </form>
                  </div>
                  <div className='w-1/2 py-16 px-12 text-white'>
                    <p >daskljdlaskdjkasdm</p>
                  </div>
                  

                </div>
            </div>
        </div>
    </>
  )
}

export default InputForm