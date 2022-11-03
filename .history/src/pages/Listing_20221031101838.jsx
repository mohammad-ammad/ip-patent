import React, { useState } from "react";
import logo from "../assets/mini_1.png";
import BgVideo from "../assets/bkg/hexagon-silver.mp4";
import "../App.css";
import axios from "axios";
import { toast } from "react-toastify";
import { ethers } from "ethers";
import { CONTRACT_PUBLIC_ADDRESS } from "../utils/contractAddress.js";
import { Marketplace } from "../utils/MarketplaceABI";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { utils } from "ethers/lib";
import InputForm from "./InputForm";

const MintingPage = () => {
  const [formInput, setFormInput] = useState({
    id: "",
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

  const ListingNFT = async (event) => {
    event.preventDefault();
    if (
      formInput.id !== "" ||
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
      const EtherPrice = ethers.utils.parseEther(formInput.price);
      toast.promise(
        contract
          .list({value:0}, formInput.id, EtherPrice, formInput.amount)
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
                })
                .catch((err)=>{console.log("erooreee in promise:",err)})
              // {
              //   pending: "Minting in Process...",
              //   success: "Mint Successfully 👌",
              //   error: "Promise rejected 🤯",
              // }
            );
          })
          .catch((err)=>{console.log("erooreee:",err)})
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
      <div className="min-h-screen py-8 ">
        <video className="mint-video-bg" src={BgVideo} autoPlay muted loop />

        {/* <div className=' w-[100%]'> */}
        <h1 className=" flex text-[#660000] text-3xl font-semibold  justify-center">
          Listing
        </h1>
        <div className="flex w-full p-4 mt-6 lg:w-8/12 rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full pb-5 pt-5 px-5 bg-[#373C44] rounded-xl border-2 border-[#660000] bg-opacity-90 text-white">
            <div className="mb-5">
              <img className="w-14 h-auto ml-auto" src={logo} />
            </div>
            {
              <form action="#" className="px-3">
                <div className="flex  w-[100%]">
                  <div className="flex flex-col justify-start w-[100%]">
                    <lable className="py-1 text-lg px">ID</lable>
                    <input
                      className="py-1 px-2 w-[100%] text-white bg-transparent border border-gray-400"
                      type="number"
                      name="id"
                      value={formInput.id}
                      onChange={FormHandler}
                      placeholder="id like 0,1,2..."
                    />
                  </div>
                  <div className="flex flex-col justify-start ml-1 w-[100%]">
                    <lable className="py-1 text-lg px">Price</lable>
                    <input
                      className="py-1 px-2 w-[100%] text-white bg-transparent border border-gray-400"
                      type="number"
                      name="price"
                      value={formInput.price}
                      onChange={FormHandler}
                      min="1"
                      placeholder=" Enter price"
                    />
                  </div>
                </div>

                <div className="flex w-[100%]">
                  <div className="flex flex-col justify-start w-[100%]">
                    <lable className="py-1 text-lg px">Amount</lable>
                    <input
                      className="py-1.5 px-2 w-[100%] text-white bg-transparent border border-gray-400"
                      type="number"
                      name="amount"
                      value={formInput.amount}
                      onChange={FormHandler}
                      placeholder="Enter Amount"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <div className="m-auto flex w-[72%] justify-center bg-[#B87333]  hover:bg-[#c07229]">
                    <button
                      className="text-lg font-semibold m-auto"
                      onClick={ListingNFT}
                    >
                      List
                    </button>
                  </div>
                </div>
              </form>
            }
          </div>
        </div>
        {/* </div> */}
      </div>
      <Footer />
    </>
  );
};

export default MintingPage;
