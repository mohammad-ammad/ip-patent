import React from 'react'
import BgVideo from "../assets/bkg/abstract.mp4";
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const MarketPlace = () => {
  return (
    <>
    <Navbar/>

    <div>
        <video className="mint-video-bg" src={BgVideo} autoPlay muted loop />
        
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default MarketPlace