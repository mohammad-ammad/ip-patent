import React from 'react'
import BgVideo from "../assets/bkg/warp.mp4";
import car from "../assets/car.jpg";

import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const MarketPlace = () => {
  return (
    <>
    <Navbar/>

    <div className="min-h-screen py-6 ">
        <video className="mint-video-bg" src={BgVideo} autoPlay muted loop />
        <div className='border border-[#FF0000] mx-8 md:mx-12 lg:mx-20 mb-28 mt-10 rounded-3xl'>
            <div className='flex justify-center mb-2'>
                <div className='bg-primary border-2  border-[#FF0000] font-bold text-white test-3xl tracking-wide pt-4 pb-3 px-12 rounded-full -mt-9 mb-8'>
                    Listed Tokens
                </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-2 mb-8'>
                    <div className='bg-secondary p-2 mx-auto cursor-pointer hover:scale-105 hover:border border-sky-900 ease-in-out transition-all'>
                        <span className= "border-box inline-block overflow-hidden   opacity-100 border-0  p-28 mb-4 relative w-full h-full max-w-[100%] max-h-full  ">
                        <img src={car} alt='NFT image' className='absolute inset-0 block  max-h-full min-h-full max-w-full min-w-full' />

                        </span>
                <div className='flex justify-between text-xs py-4 '></div>
                    </div>
                </div>
            
            <div></div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default MarketPlace