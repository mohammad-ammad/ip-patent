import React from 'react'
import BgVideo from "../assets/bkg/abstract.mp4";

const MarketPlace = () => {
  return (
    <div>
        <video className="mint-video-bg" src={BgVideo} autoPlay muted loop />
        
    </div>
  )
}

export default MarketPlace