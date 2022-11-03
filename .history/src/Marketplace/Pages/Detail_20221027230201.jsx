import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Navbar from '../../Components/Navbar';
import BgVideo from "../../assets/bkg/warp.mp4";
import Footer from "../../Components/Footer";
import car from '../../assets/car.jpg'
import eth from '../../assets/eth.png';
import {BsFillArrowDownCircleFill} from 'react-icons/bs'
const Detail = () => {
  const {token_id}=useParams();
console.log("use params token ID:",token_id);
const[Moralisresult,setMoralisResult]=useState([]);
const[titleName,setTitleName]=useState();
const[quantity,setQuantity]=useState();
const[data,setData]=useState([]);

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
    setQuantity(response.data.result[0].amount);
    setMoralisResult(response.data.result);
    const Mytitle=NameParser( response.data.result[0].metadata);
    console.log("Quantity:",response.data.result[0].amount);
    for (let i = 0; i<response.data.result[0].amount;  i++) {
      setData(response.data.result);
    }
    console.log("name:",Mytitle);
    setTitleName(Mytitle);
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
              {titleName}
            </div>
          </div>
          {/* grid */}
          {/* <div className="p-6 mb-6 grid sm:grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-2 "> */}

          {/* card */}
          {/* {
            Moralisresult.map((item,key)=>
         <div className='flex justify-center'>
          <img className='sm:w-72  h-[450px] md:w-[450px]  rounded-xl ' src={ImageParser(item.metadata)}/>
          </div>)
} */}



          {/* </div> */}

          <div className="p-2  grid sm:grid-cols-1 justify-center md:grid-cols-3 lg:grid-cols-3 gap-1 cursor-pointer">
{
  
  console.log("Dataaa:",data)

}
           
{/* card */}
{
Moralisresult.map((item,key)=>
  // for(let i=0; i<quantity; i++)
  // {
  // console.warn("quantity:",quantity) 
 <div className="text-white pt-8 mb-8 mx-4 shadow-lg border border-[#B87333] hover:scale-105 p-4  rounded-xl"> 

<img className="w-full h-80 sm:h-[400px]" src={ImageParser(item.metadata)} alt=""/>
<div className="flex justify-between ">
<span className="inline-block mx-9 text-white   rounded-full px-3 py-1 text-sm font-semibold  mr-10 ">
                 Owner
                </span>
                <span className="inline-block mx-9 text-white   rounded-full  py-1 text-sm font-semibold  mr-10 ">
                  {item.token_address.slice(0,6)}...{item.token_address.slice(39)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="inline-block text-white  rounded-full px-3  text-sm font-semibold ">
                  Quantity 
                </span>
                <span className="inline-block text-white rounded-full px-3  text-sm font-semibold ">
                  {item.amount} 
                </span>
               {console.log("token id :",item.token_id)}
              </div>
              <div className="mt-1">
                  <div className="m-auto flex w-full justify-center bg-[#B87333]  hover:bg-[#c07229]">
                  {/* <Link to={`/detail/${item.token_id}`}>  */}
                  <button
                      className="text-lg text-white font-semibold m-auto"
                    //   onClick={sendFileToIPFS}
                    
                    >
                      Buy
                    </button> 
                  </div>
                </div>
</div> 

// }
)
}

</div>
          
          </div>
          </div>
          <Footer />
    </>
  )
}

export default Detail