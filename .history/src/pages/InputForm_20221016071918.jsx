import React, { useState } from 'react'

const InputForm = () => {
    
  return (
    <>
        <div className='min-h-screen py-20 bg-slate-900'>
            <div className='container mx-auto'>
                <h1 className=' flex text-white text-4xl justify-center'>Input form</h1>
                <div className='flex mt-6 w-8/12 bg-slate-400 rounded-xl mx-auto shadow-lg overflow-hidden'>
                 
                  <div className='w-1/2 py-16 px-12 bg-slate-600 text-white'>
                  <form action='#'>
                    <div className='grid grid-cols-2 gap-5'>
                    
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='firstname'  />
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='2nd'  />
                    </div>
                    <div className='mt-2 grid grid-cols-2 gap-5'>
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='4th'  />
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='5th'  />
                    </div>
                    <div className='mt-2 grid grid-cols-2 gap-5'>
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='6th'  />
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='7th'  />
                    </div>
                    <div className='mt-2 grid grid-cols-2 gap-5'>
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='8th'  />
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='9th'  />
                    </div>
                    <div className='mt-2 grid grid-cols-2 gap-5'>
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='10th'  />
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='11th'  />
                    </div>
                    <div className='mt-2 grid grid-cols-2 gap-5'>
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='12th'  />
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='13th'  />
                    </div>
                    <div className='mt-2 grid grid-cols-2 gap-5'>
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='14th'  />
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='15th'  />
                    </div>
                    <div className='mt-2 grid grid-cols-2 gap-5'>
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='16th'  />
                    </div>
                  </form>
                  </div>
                  <div className='w-1/2 py-16 px-12 bg-slate-500 text-white'>
                  <form action='#'>
                    <div className='grid grid-cols-2 gap-5'>
                    
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='firstname'  />
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='2nd'  />
                    </div>
                    <div className='mt-2 grid grid-cols-2 gap-5'>
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='4th'  />
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='5th'  />
                    </div>
                    <div className='mt-2 grid grid-cols-2 gap-5'>
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='6th'  />
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='7th'  />
                    </div>
                    <div className='mt-2 grid grid-cols-2 gap-5'>
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='8th'  />
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='9th'  />
                    </div>
                    <div className='mt-2 grid grid-cols-2 gap-5'>
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='10th'  />
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='11th'  />
                    </div>
                    <div className='mt-2 grid grid-cols-2 gap-5'>
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='12th'  />
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='13th'  />
                    </div>
                    <div className='mt-2 grid grid-cols-2 gap-5'>
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='14th'  />
                    <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='15th'  />
                    </div>
                    <div className='mt-2  grid grid-cols-1 gap-5'>
                    <input className='w-full py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='16th'  />
                    </div>
                    <div className='mt-2  grid grid-cols-1 gap-5'>
                    <input className='w-full py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='16th'  />
                    </div>
                  </form>
                  </div>
                  

                </div>
            </div>
        </div>
    </>
  )
}

export default InputForm