import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Navbar from '../../Components/Navbar';
import BgVideo from "../../assets/bkg/warp.mp4";
import Footer from "../../Components/Footer";
import car from '../../assets/car.jpg'
import eth from '../../assets/eth.png'
const Detail = () => {
  const {token_id}=useParams();
  console.log("use params token ID:",token_id);
const[Moralisresult,setMoralisResult]=useState([]);

function NameParser(data) 
  {
    return JSON.parse(data)?.name;
  }
function ImageParser(data)
{
  return JSON.parse(data)?.image;
} 

useEffect(()=>{

const options = {
  method: 'GET',
  url: `https://deep-index.moralis.io/api/v2/nft/${process.env.REACT_APP_DEPLOYED_CONTRACT}/${token_id}/owners`,
  params: {chain: 'goerli', format: 'decimal'},
  headers: {
    accept: 'application/json',
    'X-API-Key': `${process.env.REACT_APP_Moralis_API_KEY}`
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log("Specefic  response base on the token id :",response.data.result);
    setMoralisResult(response.data.result);
  })
  .catch(function (error) {
    toast.error("Something went wrong ");
    console.error(error);
  });
},[]);
  return (
    <>
        <Navbar/>
        <div className="  min-h-screen py-20 ">
        <video className="market-video-bg" src={BgVideo} autoPlay muted loop />
        <div className="border    border-[#FF0000] mx-8 md:mx-12 lg:mx-20 mb-28 mt-10 rounded-3xl">
          <div className="flex justify-center mb-2">
            <div className="bg-black border-2  border-[#FF0000]  text-[#B87333] test-3xl font-semibold tracking-wide pt-4 pb-3 px-12 rounded-full -mt-8 mb-8">
              Detail 
            </div>
          </div>
          {/* grid */}
          <div className="p-6 mb-6 grid sm:grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-2 ">

          {/* card */}
          {
            Moralisresult.map((item,key)=>
          <div className="text-white justify-center pt-8   p-4  rounded-xl"> 
          <img className='w-[450px] h-[450px] rounded-xl ' src={ImageParser(item.metadata)}/>
          </div>)
}
{
  Moralisresult.map((item,key)=>
          <div className="text-white justify-center  mb-8   p-4  rounded-xl"> 
          <h2 className='flex justify-start  p-3 text-3xl'>{NameParser(item.metadata)}</h2>
          <div className="flex justify-between items-center py-2 border rounded-full border-[#c07229] px-3 ">
                <span className="inline-block text-white  rounded-full px-3 py-1 text-sm font-semibold  mr-10 mb-2">
                  Current price 
                </span>
                
                <span className="inline-block text-white  rounded-full px-3 py-1 text-sm font-semibold  mr-10 mb-2">
                <img className='w-3 h-5 mr-1 inline-block' src={eth}/>  {item.amount} 
                </span>
          </div> 
          <div className="flex justify-between mt-2 items-center py-2 border border-[#c07229] rounded-full px-3  ">
                <span className="inline-block text-white   rounded-full px-3 py-1 text-sm font-semibold  mr-10 mb-2">
                  PDF File 
                </span>
                
                <span className="inline-block text-white cursor-pointer  rounded-full px-3 py-1 text-sm font-semibold  mr-10 mb-2">
                  eth.pdf
                </span>
          </div>  
          <div className="my-6">
                  <div className="m-auto flex w-full justify-center bg-[#B87333]  hover:bg-[#c07229]">
                   <button
                      className="text-lg text-white font-semibold m-auto"
 
                    >
                      Buy
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
  )
}

export default Detail