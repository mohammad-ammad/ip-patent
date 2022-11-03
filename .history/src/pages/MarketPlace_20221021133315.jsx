import React from "react";
import BgVideo from "../assets/bkg/warp.mp4";
import car from "../assets/car.jpg";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MarketPlace = () => {
  return (
    <>
      <Navbar />

      <div className="container  min-h-screen py-20 ">
        <video className="mint-video-bg" src={BgVideo} autoPlay muted loop />
        <div className="border  border-[#FF0000] mx-8 md:mx-12 lg:mx-20 mb-28 mt-10 rounded-3xl">
          <div className="flex justify-center mb-2">
            <div className="bg-primary border-2  border-[#FF0000] font-bold text-white test-3xl tracking-wide pt-4 pb-3 px-12 rounded-full -mt-8 mb-8">
              Listed Tokens
            </div>
          </div>
          {/* grid */}

          <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <div className=" overflow-hidden shadow-lg border border-[#B87333]  hover:scale-105 p-4  rounded-xl">
              <img className="w-full" src={car} alt="Mountain" />
             
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <div className="mt-1">
                  <div className="m-auto flex w-full justify-center bg-[#B87333]  hover:bg-[#c07229]">
                    <button
                      className="text-lg font-semibold m-auto"
                    //   onClick={sendFileToIPFS}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-2 mb-8'>
                    <div className='bg-secondary p-2 mx-auto cursor-pointer hover:scale-105 hover:border border-sky-900 ease-in-out transition-all'>
                        <span className= "border-box inline-block overflow-hidden   opacity-100 border-0  p-28 mb-4 relative w-full h-full max-w-[100%] max-h-full  ">
                        <img src={car} alt='NFT image' className='absolute inset-0 block  max-h-full min-h-full max-w-full min-w-full' />

                        </span>
                <div className='flex justify-between text-xs bg-slate-800  px-6 mb-1  bg-primary rounded-xl'>
                    <div>
                        <p className='text-white'>Owner</p>
                        <p className='text-white'>Copyies</p>
                    </div>
                    <div>
                        <p className='text-white'>Owner</p>
                        <p className='text-white'>Copyies</p>
                    </div>
                </div>
                    </div>
                    ////
                    <div className='bg-secondary p-2 mx-auto cursor-pointer hover:scale-105 hover:border border-sky-900 ease-in-out transition-all'>
                        <span className= "border-box inline-block overflow-hidden   opacity-100 border-0  p-28 mb-4 relative w-full h-full max-w-[100%] max-h-full  ">
                        <img src={car} alt='NFT image' className='absolute inset-0 block  max-h-full min-h-full max-w-full min-w-full' />

                        </span>
                <div className='flex justify-between text-xs bg-slate-800  px-6 mb-1  bg-primary rounded-xl'>
                    <div>
                        <p className='text-white'>Owner</p>
                        <p className='text-white'>Copyies</p>
                    </div>
                    <div>
                        <p className='text-white'>Owner</p>
                        <p className='text-white'>Copyies</p>
                    </div>
                </div>
                    </div>
                    /////
                    <div className='bg-secondary p-2 mx-auto cursor-pointer hover:scale-105 hover:border border-sky-900 ease-in-out transition-all'>
                        <span className= "border-box inline-block overflow-hidden   opacity-100 border-0  p-28 mb-4 relative w-full h-full max-w-[100%] max-h-full  ">
                        <img src={car} alt='NFT image' className='absolute inset-0 block  max-h-full min-h-full max-w-full min-w-full' />

                        </span>
                <div className='flex justify-between text-xs bg-slate-800  px-6 mb-1  bg-primary rounded-xl'>
                    <div>
                        <p className='text-white'>Owner</p>
                        <p className='text-white'>Copyies</p>
                    </div>
                    <div>
                        <p className='text-white'>Owner</p>
                        <p className='text-white'>Copyies</p>
                    </div>
                </div>
                    </div>
                    ////
                    <div className=' bg-secondary p-2 mx-auto cursor-pointer hover:scale-105 hover:border border-sky-900 ease-in-out transition-all'>
                        <span className= "border-box inline-block overflow-hidden   opacity-100 border-0  p-28 mb-4 relative w-full h-full max-w-[100%] max-h-full  ">
                        <img src={car} alt='NFT image' className='absolute inset-0 block  max-h-full min-h-full max-w-full min-w-full' />

                        </span>
                <div className='flex justify-between text-xs bg-slate-800  px-6 mb-1  bg-primary rounded-xl'>
                    <div>
                        <p className='text-white'>Owner</p>
                        <p className='text-white'>Copyies</p>
                    </div>
                    <div>
                        <p className='text-white'>Owner</p>
                        <p className='text-white'>Copyies</p>
                    </div>
                </div>
                    </div>
                    ////
                </div>
             */}
          <div></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarketPlace;
