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

          <div className="p-6 mb-6 grid grid-cols-3 gap-0 ">
          <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src={car} alt="Mountain"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Mountain</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>

          </div>

          

        
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarketPlace;
