import React, { useState,useContext } from "react";
import logo from "../assets/mini_1.png";
import BgVideo from "../assets/bkg/warp.mp4";

import "../App.css";
import axios from "axios";
import { toast } from "react-toastify";
import { ethers } from "ethers";
import { CONTRACT_PUBLIC_ADDRESS } from "../utils/contractAddress.js";
import { Marketplace } from "../utils/MarketplaceABI";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import car from "../assets/car.jpg"
import { utils } from "ethers/lib";
import InputForm from "./InputForm";
import { MoraliContext } from "../context/MoralisContext";


const List = () => {
const {Moralisresult}=useContext(MoraliContext);
function NameParser(data) 
  {
    return JSON.parse(data)?.name;
  }
function ImageParser(data)
{
  return JSON.parse(data)?.image;
} 
  const [formInput, setFormInput] = useState({
    
    price: "",
    amount: "",
  });
 
  const FormHandler = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const [mintingStatus, setMintingStatus] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deployAddress, setDeployAddress] = useState("");

  const ListingNFT = async (event,id) => {
    event.preventDefault();
    console.log("specefic token id",id)
    if (
      // formInput.id !== "" ||
      formInput.amount !== "" ||
      formInput.price !== ""
    ) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log("Listing Signer:", signer);
      const contract = new ethers.Contract(
        CONTRACT_PUBLIC_ADDRESS,
        Marketplace,
        signer
      );
      console.log("Listing Contract:", contract);
      let EtherPrice = utils.parseEther("100");
      console.log("Price in ethers:",EtherPrice);
      let wei=EtherPrice.toString(10);
      console.log("in weis:",wei)
      toast.promise(
        contract
          .list({value:utils.parseEther("0")}, id, {value:"100"}, {value:1})
          .then((transaction) => {
            toast.promise(
              transaction
                .wait()
                .then((tx) => {
                  console.log("Listing Call Response:", tx);
                  toast.info(tx);
                  setMintingStatus = false;
                })
                .catch((err) => {
                  toast.error("Error in listing:", err);
                }),
              {
                pending: "Minting in Process...",
                success: "Mint Successfully 👌",
                error: "Promise rejected 🤯",
              }
            );
          }).catch((err)=>console.log("errorrr:",err))
          
        // {
        //   pending: "Waiting to Sign Listing...",
        //   success: "Listing Signed... 👌",
        //   error: "Listing Rejected 🤯",
          
        // }
      );
    } else {
      toast.warn("Please fill the feilds!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="  min-h-screen py-20 ">
        <video className="market-video-bg" src={BgVideo} autoPlay muted loop />
        <div className="border    border-[#FF0000] mx-8 md:mx-12 lg:mx-20 mb-20 mt-10 rounded-3xl">
          <div className="flex justify-center mb-2">
            <div className="bg-black border-2  border-[#FF0000]  text-[#B87333] test-3xl font-semibold tracking-wide pt-4 pb-3 px-12 rounded-full -mt-8 mb-8">
              List NFT
            </div>
            </div>
            {/* grid */}
          <div className="p-2  grid sm:grid-cols-1 justify-center md:grid-cols-3 lg:grid-cols-3 gap-1 ">
           {
            Moralisresult.map((item)=>
            <div className="text-white mb-8  mx-4 shadow-lg border border-[#B87333] hover:scale-105 p-4  rounded-xl"> 
            <img className="w-full lg:h-[300px] md:h-[300px] sm:h-[350px] rounded-xl" src={ImageParser(item.metadata)} alt=""/>
            
            <div className="flex justify-between">
                <span className="inline-block text-white  rounded-full  py-1 text-sm font-semibold   mb-1">
                  Quantity 
                </span>
                <span className="inline-block text-white rounded-full  py-1 text-sm font-semibold   mb-1">
                  {item.amount} 
                </span>
               
              </div>

            <div className="flex justify-between  mb-1">
          
                  <lable>Price</lable>
                <input
                      className=" px-2 w-[20%] text-white bg-transparent "
                      type="number"
                      name="price"
                      value={formInput.price}
                      onChange={FormHandler}
                      // placeholder="id like 0,1,2.."
                    />
                  <lable>Amount</lable>
                <input
                      className=" px-2 w-[20%] text-white bg-transparent "
                      type="number"
                      name="amount"
                      value={formInput.amount}
                      onChange={FormHandler}
                      // placeholder="id like 0,1,2.."
                    />
               
              </div>
              <div className="">
                    <div className="m-auto flex w-full justify-center bg-[#B87333]  hover:bg-[#c07229]">
                      {/* <Link to={`/detail/${item.token_id}`}>  */}
                      <button
                        className="text-lg text-white font-semibold m-auto"
                        //   onClick={sendFileToIPFS}
                        onClick={event=>ListingNFT(event,item.token_id)}
                      >
                        List
                      </button>
                    </div>
                  </div>
             </div>)
}
              </div>

            </div>
            </div>
    

     
      
      <Footer />
    </>
  );
};

export default List;
