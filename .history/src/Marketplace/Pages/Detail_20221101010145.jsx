import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "../../Components/Navbar";
import BgVideo from "../../assets/bkg/warp.mp4";
import Footer from "../../Components/Footer";
import car from "../../assets/car.jpg";
import eth from "../../assets/eth.png";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
const Detail = () => {
  const { token_id } = useParams();
  console.log("use params token ID:", token_id);
  const [Moralisresult, setMoralisResult] = useState([]);
  const [titleName, setTitleName] = useState();
  const [quantity, setQuantity] = useState();
  const [data, setData] = useState([]);
  // const data=[];

  function NameParser(data) {
    return JSON.parse(data)?.name;
  }
  function ImageParser(data) {
    return JSON.parse(data)?.image;
  }

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://deep-index.moralis.io/api/v2/nft/${process.env.REACT_APP_DEPLOYED_CONTRACT}/${token_id}/owners`,
      params: { chain: "goerli", format: "decimal" },
      headers: {
        accept: "application/json",
        "X-API-Key": `${process.env.REACT_APP_Moralis_API_KEY}`,
      },
    };
  
    axios
      .request(options)
      .then(function (response) {
        console.log(
          "Specefic  response base on the token id :",
          response.data.result
        );
        setQuantity(response.data.result[0].amount);
        // setMoralisResult(response.data.result);
        const Mytitle = NameParser(response.data.result[0].metadata);
        console.log("Quantity:", response.data.result[0].amount);
        for (let i = response.data.result[0].amount; i >0 ; i--) {
          setMoralisResult(pre=>[...pre,response.data.result]);
          console.log("This is an array ", response.data.result);
        }
        console.log("name:", Mytitle);
        setTitleName(Mytitle);
      })
      .catch(function (error) {
        toast.error("Something went wrong ");
        console.error(error);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="  min-h-screen py-20 ">
        <video className="market-video-bg" src={BgVideo} autoPlay muted loop />
        <div className="border    border-[#FF0000] mx-8 md:mx-12 lg:mx-20 mb-28 mt-10 rounded-3xl">
          <div className="flex justify-center mb-2">
            <div className="bg-black border-2  border-[#FF0000]  text-[#B87333] test-3xl font-semibold tracking-wide pt-4 pb-3 px-12 rounded-full -mt-8 mb-8">
              {titleName}
            </div>
          </div>

          <div className="p-2  grid sm:grid-cols-1 justify-center md:grid-cols-3 lg:grid-cols-3 gap-1 cursor-pointer">
            { console.log("dataaaaa",data)}
        {/* console.log("ressssssssssssssss:",response.data.result[0]); */}

            {/* card */}
            {Moralisresult.map(
              (item, key) => (
                <div className="text-white  mb-8 mx-4 shadow-lg border border-[#B87333] hover:scale-105 p-4  rounded-xl">
                  <img
                    className="w-full lg:h-[300px] md:h-[300px]  sm:h-[350px] rounded-xl"
                    src={ImageParser(item[0].metadata)}
                    alt=""
                  />
                  <div className="flex justify-between ">
                    <span className="inline-block px-3 text-white   rounded-full  py-1 text-sm font-semibold   ">
                      Owner
                    </span>
                    <span className="inline-block  text-white   rounded-full  py-1 text-sm font-semibold   ">
                      {item[0].token_address.slice(0, 6)}...
                      {item[0].token_address.slice(39)}

                      {/* {console.log(" my itemssss ",item[0].token_address)
                      
                      } */}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="inline-block text-white  rounded-full px-3  text-sm font-semibold ">
                       Price
                    </span>
                    <span className="inline-block text-white rounded-full px-3  text-sm font-semibold ">
                     0.06 Eth
                    </span>
                    {console.log("token id :", item.token_id)}
                  </div>
                  <div className="">
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
              )

              // }
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
