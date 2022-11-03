import React, { useEffect, useState,useContext } from "react";
import BgVideo from "../assets/bkg/warp.mp4";
import car from "../assets/car.jpg";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { MoraliContext } from "../context/MoralisContext";

const MarketPlace = () => {
const {Moralisresult}=useContext(MoraliContext);
console.log("Moralis Result",Moralisresult)
  return (
    <>
      <Navbar />

      <div className="  min-h-screen py-20 ">
        <video className="market-video-bg" src={BgVideo} autoPlay muted loop />
        <div className="border    border-[#FF0000] mx-8 md:mx-12 lg:mx-20 mb-28 mt-10 rounded-3xl">
          <div className="flex justify-center mb-2">
            <div className="bg-black border-2  border-[#FF0000]  text-[#B87333] test-3xl font-semibold tracking-wide pt-4 pb-3 px-12 rounded-full -mt-8 mb-8">
              Collections
            </div>
          </div>
          {/* grid */}

          <div className="p-6 mb-6 grid sm:grid-cols-1 justify-center md:grid-cols-3 lg:grid-cols-3 gap-1">
            {/* card 1 */}
            {
              Moralisresult.map((item,key)=>
            <div className="text-white pt-8 mb-8 mx-4 shadow-lg border border-[#B87333] hover:scale-105 p-4  rounded-xl"> 
              <img src={car} alt=""/>
              <div className="flex justify-between">
                <span className="inline-block text-white  rounded-full px-3 py-1 text-sm font-semibold  mr-10 mb-2">
                  Owner 
                </span>
                <span className="inline-block text-white rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                  Usman
                </span>
               
              </div>
              <div className="flex justify-between">
                <span className="inline-block text-white  rounded-full px-3 py-1 text-sm font-semibold  mr-10 mb-2">
                  NFT Copies 
                </span>
                <span className="inline-block text-white rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                  12
                </span>
               
              </div>
              <div className="mt-1">
                  <div className="m-auto flex w-full justify-center bg-[#B87333]  hover:bg-[#c07229]">
                    <button
                      className="text-lg text-white font-semibold m-auto"
                    //   onClick={sendFileToIPFS}
                    >
                      View
                    </button>
                  </div>
                </div>
            </div>
            )
          
            }
           
           
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarketPlace;
