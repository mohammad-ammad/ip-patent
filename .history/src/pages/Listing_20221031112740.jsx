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
      <div className="  min-h-screen py-20 ">
        <video className="market-video-bg" src={BgVideo} autoPlay muted loop />
        <div className="border    border-[#FF0000] mx-8 md:mx-12 lg:mx-20 mb-20 mt-10 rounded-3xl">
          <div className="flex justify-center mb-2">
            <div className="bg-black border-2  border-[#FF0000]  text-[#B87333] test-3xl font-semibold tracking-wide pt-4 pb-3 px-12 rounded-full -mt-8 mb-8">
              Profile
            </div>
            </div>
            </div>
            </div>
    

     
      
      <Footer />
    </>
  );
};

export default MintingPage;
