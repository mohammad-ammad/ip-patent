import React from 'react'
import BgVideo from "../assets/bkg/abstract.mp4";
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const MarketPlace = () => {
  return (
    <>
    <Navbar/>

    <div className="min-h-screen py-6 ">
        <video className="mint-video-bg" src={BgVideo} autoPlay muted loop />
        <div className='border border-[#FF0000] mx-8 md:mx-12 lg:mx-20 mb-28 mt-10'>
            <div className='flex justify-center mb-2'>
                <div className='bg-primary border-2 border-[#FF0000] test-3xl tracking-wide pt-4 pb-3 px-12 rounded-full -mt-8 m'></div>
            </div>
            <div></div>
        </div>
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default MarketPlace