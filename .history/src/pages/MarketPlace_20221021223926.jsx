import React from "react";
import BgVideo from "../assets/bkg/warp.mp4";
import car from "../assets/car.jpg";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MarketPlace = () => {
  return (
    <>
      <Navbar />

      <div className="  min-h-screen py-20 ">
        <video className="market-video-bg" src={BgVideo} autoPlay muted loop />
        <div className="border    border-[#FF0000] mx-8 md:mx-12 lg:mx-20 mb-28 mt-10 rounded-3xl">
          <div className="flex justify-center mb-2">
            <div className="bg-black border-2  border-[#FF0000] font-bold text-white test-3xl tracking-wide pt-4 pb-3 px-12 rounded-full -mt-8 mb-8">
             Collections
            </div>
          </div>
          {/* grid */}

          <div className="p-6 mb-6 grid grid-cols-1 justify-center gap-[2rem] m-8 ">
          <div className="pt-4 overflow-hidden  shadow-md border border-[#B87333]  hover:scale-105 p-4  rounded-xl">
            
          </div>

          </div>

          

        
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarketPlace;
