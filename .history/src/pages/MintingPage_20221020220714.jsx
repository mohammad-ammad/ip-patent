import React, { useState } from "react";
import logo from "../assets/mini_1.png";
import BgVideo from "../assets/bkg/hexagon-silver.mp4";
import "../App.css";
import axios from "axios";
import { toast } from "react-toastify";
// import { TailSpin } from 'react-loader-spinner';
import {  ethers } from "ethers";
import { CONTRACT_PUBLIC_ADDRESS } from "../utils/contractAddress.js";
import {ERC1155ABI} from "../utils/abis";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// const[uplaodindata,setUploadingdata]=useState(false);
const MintingPage = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    quantity: "",
    imgUrl: "",
  });
  const [pdfFile, setFile] = useState(null);
  const FileHandler = (e) => {
    setFile(e.target.files[0]);
  };
  const FormHandler = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };
  const [mintingStatus, setMintingStatus] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deployAddress, setDeployAddress] = useState("");

  // 1.uploading to ipfs

  const sendFileToIPFS = async (event) => {
    event.preventDefault();
    if (formInput.name !== "") {
      try {
        const formData = new FormData();
        formData.append("file", pdfFile);
        toast.promise(
          axios({
            method: "post",
            url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
            data: formData,
            headers: {
              pinata_api_key: `${process.env.REACT_APP_PINATA_API_KEY}`,
              pinata_secret_api_key: `${process.env.REACT_APP_PINATA_API_SECRET}`,
              "Content-Type": "multipart/form-data",
            },
          }).then((responce) => {
            handleCreateMetadata(
              "https://gateway.pinata.cloud/ipfs/" + responce?.data?.IpfsHash
            );
          }),
          {
            pending: "Uploading Data to IPFS",
            error: "Error while uploading PDF to IPFS",
          }
        );
      } catch (error) {
        console.log(error);
        toast.error("Error while uploading File to IPFS");
      }
    } else {
      toast.warn("Please fill the feilds:");
    }
  };

  const handleCreateMetadata = async (pdfHash) => {
    const { name, imgUrl } = formInput;
    if (!name || !imgUrl) {
      toast.error("Please fill all the feilds");
      return;
    }

    const metadata = {
      name: name,
      image: imgUrl,
      pdf: pdfHash,
    };

    console.log("Metadata:", metadata);

    setFormInput({
      name: "",
      quantity: "",
      imgUrl: "",
      pdfFile: "",
    });

    toast.promise(
      axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
        data: JSON.stringify(metadata),
        headers: {
          pinata_api_key: `${process.env.REACT_APP_PINATA_API_KEY}`,
          pinata_secret_api_key: `${process.env.REACT_APP_PINATA_API_SECRET}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          mintItem(`https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`);
          setMintingStatus(false);
          console.log("responseeee", res);
        })
        .catch((err) => {
          toast.error("Error Uploading Metadata to IPFS: Metadata ");
          console.log(err);
          setMintingStatus(false);
        }),
      {
        pending: "Upload data to IPFS",
        success: "Uploaded Metadata",
        error: "Something went wrong!",
      }
    );
  };
  // mint item
  const mintItem = async (metadataURI) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log("URI", metadataURI);
    const contract = new ethers.Contract(
      CONTRACT_PUBLIC_ADDRESS,
      ERC1155ABI,
      signer
    );
    console.log("Contract:", contract);
    console.log("Quantity:", formInput.quantity);
    console.log("Meta:", metadataURI);
    toast.promise(
      contract.mint(formInput.quantity, metadataURI).then((transaction) => {
        toast.promise(
          transaction
            .wait()
            .then((tx) => {
              toast.info(tx);
              setMintingStatus(false);
            })
            .catch((err) => {
              toast.error("Error in Minting Token:", err);
            }),
          {
            pending: "Minting in Process...",
            success: "Mint Successfully 👌",
            error: "Promise rejected 🤯",
          }
        );
      }),
      {
        pending: "Waiting to Sign Transaction...",
        success: "Transaction Signed... 👌",
        error: "Transaction Rejected 🤯",
      }
    );
  };
  return (
    <>
    <Navbar/>
      <div className="min-h-screen py-8 ">
        <video className="mint-video-bg" src={BgVideo} autoPlay muted loop />

        {/* <div className=' w-[100%]'> */}
        <h1 className=" flex text-white text-4xl font-semibold  justify-center">
          Minting Page
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
                    <lable className="py-1 text-lg px">Name</lable>
                    <input
                      className="py-1 px-2 w-[100%] text-white bg-transparent border border-gray-400"
                      type="text"
                      name="name"
                      value={formInput.name}
                      onChange={FormHandler}
                      placeholder="name"
                    />
                  </div>
                  <div className="flex flex-col justify-start ml-1 w-[100%]">
                    <lable className="py-1 text-lg px">Quantity</lable>
                    <input
                      className="py-1 px-2 w-[100%] text-white bg-transparent border border-gray-400"
                      type="number"
                      name="quantity"
                      value={formInput.quantity}
                      onChange={FormHandler}
                      min="1"
                      placeholder=" Quantity Copies for NFT"
                    />
                  </div>
                </div>

                <div className="flex w-[100%]">
                  <div className="flex flex-col justify-start w-[100%]">
                    <lable className="py-1 text-lg px">Image URL</lable>
                    <input
                      className="py-1.5 px-2 w-[100%] text-white bg-transparent border border-gray-400"
                      type="url"
                      name="imgUrl"
                      value={formInput.imgUrl}
                      onChange={FormHandler}
                      placeholder="Image url"
                    />
                  </div>
                  <div className="flex  flex-col justify-start ml-1 w-[100%]">
                    <lable className="py-1 text-lg px">File</lable>
                    <input
                      className=" py-0.5   w-[100%] text-white bg-transparent border border-gray-400"
                      type="file"
                      onChange={FileHandler}
                      accept="application/pdf"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <div className="m-auto flex w-[72%] justify-center bg-[#B87333]">
                    <button
                      className="text-lg font-semibold m-auto"
                      onClick={sendFileToIPFS}
                    >
                      Mint
                    </button>
                  </div>
                </div>
              </form>
            }
          </div>
        </div>
        {/* </div> */}
      </div>
      <Footer/>
    </>
  );
};

export default MintingPage;
