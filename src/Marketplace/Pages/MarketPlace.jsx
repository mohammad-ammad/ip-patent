import { ethers } from "ethers";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import BgVideo from "../../assets/bkg/warp.mp4";
import BuyNftNodel from "../../Components/BuyNftNodel";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import { InstanceContext } from "../../context/InstanceContext";
import { MoraliContext } from "../../context/MoralisContext";
import { MARKETPLACE_CONTRACT_ADDRESS } from "../../utils/contractAddress.js";
import { Marketplace } from "../../utils/MarketplaceABI";

const MarketPlace = () => {
  const { Moralisresult } = useContext(MoraliContext);
  console.log("Moralis Result", Moralisresult);
  function NameParser(data) {
    return JSON.parse(data)?.name;
  }
  function ImageParser(data) {
    return JSON.parse(data)?.image;
  }
  useEffect(() => {
    const load = async () => {
      const provider = new ethers.providers.JsonRpcProvider(
        "https://polygon-mumbai.g.alchemy.com/v2/la-zlvPjvKYKidlxY4Mf6jkMqDFaDgbY"

      );
      const contract = new ethers.Contract(
        MARKETPLACE_CONTRACT_ADDRESS,
        Marketplace,
        provider
      );
      const data = await contract.getListed();
      console.log("Getlisted data:", data);
    }
    load();
  }, []);

  //---USECONTEXT
  const { ListedNft, listed } = useContext(InstanceContext)
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  //---USEEFFECT
  useEffect(() => {
    ListedNft()
  }, [])

  const openModel = (item) => 
  {
    setData(item)
    setShowModal(true)
  }
  return (
    <>
      <Navbar />
      <div className="  min-h-screen py-20 ">
        <video className="market-video-bg" src={BgVideo} autoPlay muted loop />
        <div className="border    border-[#FF0000] mx-8 md:mx-12 lg:mx-20 mb-20 mt-10 rounded-3xl">
          <div className="flex justify-center mb-2">
            <div className="bg-black border-2  border-[#FF0000]  text-[#B87333] test-3xl font-semibold tracking-wide pt-4 pb-3 px-12 rounded-full -mt-8 mb-8">
              Collections
            </div>
          </div>
          {/* grid */}

          <div className="p-2  grid sm:grid-cols-1 justify-center md:grid-cols-3 lg:grid-cols-3 gap-1 cursor-pointer">
            {/* card 1 */}
            {
              listed.length > 0 ?
                listed.map((item) =>
                  <div className="text-white mb-8  mx-4 shadow-lg border border-[#B87333] hover:scale-105 p-4  rounded-xl">

                    <div onClick={()=>openModel(item)}>
                    <img className="w-full lg:h-[300px] md:h-[300px] sm:h-[350px] rounded-xl" src={item.image_url} alt="" />
                  <div className="p-2">
                    <h1 className="text-md font-semibold">{item.name}</h1>
                  </div>

                  <div className="flex justify-start px-2">
                    <span className="inline-block text-white  rounded-full text-sm font-semibold mb-1 mr-2">
                      Quantity:
                    </span>
                    <span className="inline-block text-white rounded-full text-sm font-semibold mb-1">
                      {item.quantity}
                    </span>

                  </div>

                  <div className="flex justify-start px-2">
                    <span className="inline-block text-white  rounded-full text-sm font-semibold mb-1 mr-2">
                      Price:
                    </span>
                    <span className="inline-block text-white rounded-full text-sm font-semibold mb-1">
                      {item.price}
                    </span>

                  </div>

                  <div className="flex justify-start px-2">
                    <span className="inline-block text-white  rounded-full text-sm font-semibold mb-1 mr-2">
                      Owner:
                    </span>
                    <span className="inline-block text-white rounded-full text-sm font-semibold mb-1">
                    {item.wallet.slice(0,6)}...{item.wallet.slice(36)}
                    </span>

                  </div>
                     

                    </div>
                  </div>
                )
                : null
            }


          </div>

        </div>
      </div>

      <BuyNftNodel showModal={showModal} setShowModal={setShowModal} data={data}/>
      <Footer />
    </>
  );
};

export default MarketPlace;
