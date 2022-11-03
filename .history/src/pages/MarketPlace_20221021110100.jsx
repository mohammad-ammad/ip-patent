import React from 'react'
import BgVideo from "../assets/bkg/warp.mp4";
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
                <div className='bg-primary border-2 border-[#FF0000] font-bold text-white test-3xl tracking-wide pt-4 pb-3 px-12 rounded-full -mt-8 mb-8'>
                    Listed Tokens
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-2'>
                    <div className='bg-secondary p-3 mx-auto cursor-pointer hover:scale-105 hover:border border-sky-900 ease-in-out'></div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default MarketPlace