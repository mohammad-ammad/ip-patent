import React from 'react'
import logo from '../assets/mini_1.png';
import BgVideo from '../assets/bkg/hexagon-silver.mp4';
import '../App.css';

const MintingPage = () => {
  return (
    <>
    <div className='min-h-screen py-8 '>
    <video className='form-video-bg  ' src={BgVideo} autoPlay muted loop />

        <div className='container mx-auto'>
            <h1 className=' flex text-black text-4xl  justify-center'>Minting Page</h1>
            <div className='flex mt-6 w-8/12 rounded-xl mx-auto shadow-lg overflow-hidden'>
              <div className='  w-full pb-5 pt-5 px-5 bg-[#373C44] rounded-xl border-2 border-[#660000] bg-opacity-90 text-white'>
              <div className='mb-5'>
                <img className='w-14 h-auto ml-auto' src={logo} />
              </div>
              <form action='#' className='px-3'>
                <div className='flex flex-col justify-start'>
                  <lable className='py-1 text-lg px'>Name</lable>
                <input className='py-1 px-1 w-20 text-white bg-transparent border border-gray-400' type='text' placeholder='firstname'  />
                {/* <input className='py-1 px-2 text-white bg-transparent border border-gray-400' type='text' placeholder='2nd'  /> */}
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
               
               
                <div className=' mt-2 grid grid-cols-1 justify-center hover:bg-blue-600 gap-5 bg-blue-500'>
                    <button className='text-lg font-semibold'>Submit</button>
                </div>
              </form>
              </div>
             
              

            </div>
        </div>
    </div>
</>
  )
}

export default MintingPage