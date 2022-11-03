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
        <div className='border border-[#FF0000] mx-8'>
            <div></div>
            <div></div>
        </div>
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default MarketPlace