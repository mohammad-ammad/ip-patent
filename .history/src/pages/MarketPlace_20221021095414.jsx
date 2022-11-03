import React from 'react'
import BgVideo from "../assets/bkg/abstract.mp4";
import Navbar from '../Components/Navbar';

const MarketPlace = () => {
  return (
    <>
    <Navbar/>

    <div>
        <video className="mint-video-bg" src={BgVideo} autoPlay muted loop />
        
    </div>
    </>
  )
}

export default MarketPlace