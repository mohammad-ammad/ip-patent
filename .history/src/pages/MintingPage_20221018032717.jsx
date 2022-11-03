import React, { useState } from 'react'
import logo from '../assets/mini_1.png';
import BgVideo from '../assets/bkg/hexagon-silver.mp4';
import '../App.css';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const MintingPage = () => {
  const[formInput,setFormInput]=useState({
    name:"",
    quantity:"",
    imgUrl:""
});
const[pdfFile,setFile]=useState(null);
const FileHandler=(e)=>{
  setFile(e.target.files[0]); 
}
const FormHandler=(e)=>{
  setFormInput({
    ...formInput,
    [e.target.name]:e.target.value
  })
}
const sendFileToIPFS=async (event)=>{
  event.preventDefault();
}


// const handleUploadImage=async (event)=>{
//   const formData = new FormData();
//   formData.append("file",event.target.files[0]);
//   toast.promise(
//     axios({
//       method: "post",
//         url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
//         data: formData,
//         headers: {
//           pinata_api_key: `${process.env.PINATA_API_KEY}`,
//           pinata_secret_api_key: `${process.env.PINATA_API_SECRET}`,
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((res) => {
//         setFormInput({
//           ...formInput,
//           image: `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`,
//         });
//       })
//       .catch((err)=>{
//         toast.error("Error in uploading Image to IPFS: ");
//         toast.error(err);
//       })
//   )
// }

  return (
    <>
    <div className='min-h-screen py-8 '>
    <video className='mint-video-bg' src={BgVideo} autoPlay muted loop />

        {/* <div className=' w-[100%]'> */}
            <h1 className=' flex text-black text-4xl font-semibold  justify-center'>Minting Page</h1>
            <div className='flex mt-6 w-8/12 rounded-xl mx-auto shadow-lg overflow-hidden'>
              <div className='w-full pb-5 pt-5 px-5 bg-[#373C44] rounded-xl border-2 border-[#660000] bg-opacity-90 text-white'>
              <div className='mb-5'>
                <img className='w-14 h-auto ml-auto' src={logo} />
              </div>
              <form action='#' className='px-3'>
                <div className='flex  w-[100%]'>
                  <div className='flex flex-col justify-start w-[100%]'>
                  <lable className='py-1 text-lg px'>Name</lable>
                  <input className='py-1 px-2 w-[100%] text-white bg-transparent border border-gray-400' type='text' name='name' value={formInput.name} onChange={FormHandler} placeholder='name'  />
                  </div>
                  <div className='flex flex-col justify-start ml-1 w-[100%]'>
                  <lable className='py-1 text-lg px'>Quantity</lable>
                  <input className='py-1 px-2 w-[100%] text-white bg-transparent border border-gray-400' type='number' name='quantity' value={formInput.quantity} onChange={FormHandler} min='1'  placeholder=' Quantity Copies for NFT'  />
                  

                 
                  </div>
                </div>

                <div className='flex w-[100%]'>
                  <div className='flex flex-col justify-start w-[100%]'>
                  <lable className='py-1 text-lg px'>Image URL</lable>
                  <input className='py-1.5 px-2 w-[100%] text-white bg-transparent border border-gray-400' type='url' name='imgUrl' value={formInput.imgUrl} onChange={FormHandler} placeholder='Image url'  />
                  </div>
                  <div className='flex flex-col justify-start ml-1 w-[100%]'>
                  <lable className='py-1 text-lg px'>File</lable>
                  <input className='py-0.5 px-2 w-[100%] text-white bg-transparent border border-gray-400' type='file'  onChange={FileHandler} accept="application/pdf"   />
                  </div>
                </div>
               
                <div className='mt-4'>
                <div className='m-auto flex w-[70%] justify-center hover:bg-blue-600  bg-blue-500'>
                    <button className='text-lg font-semibold m-auto' onClick={sendFileToIPFS}>Upload to IPFS</button>
                </div>
                </div>
              </form>
              </div>
             
              

            </div>
        {/* </div> */}
    </div>
</>
  )
}

export default MintingPage