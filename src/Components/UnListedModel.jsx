import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import {HiX} from 'react-icons/hi';
import { InstanceContext } from '../context/InstanceContext';

const UnListedModel = ({showModal,setShowModal, data}) => {
    //---USECONTEXT
    const {ListNft} = useContext(InstanceContext)

    //---USESTATE
    const [price, setPrice] = useState("")

    //---listing function
    const listingHandler = (tokenId,price,quantity,id) => 
    {
        ListNft(tokenId,price,quantity,id)
        setShowModal(false)
    }


    return (
        <>
            {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#343D46] outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-5 border-b border-solid border-[#343D46] rounded-t">
                  <h3 className="text-3xl font-semibold text-white">
                    IP Patent
                  </h3>
                  <div>
                    <HiX className='text-white font-semibold text-lg cursor-pointer' onClick={() => setShowModal(false)}/>
                  </div>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                 <div className='flex justify-center items-center'>
                    <div>
                        <img src={data?.image_url} className="w-32 rounded-lg" alt="" />
                    </div>
                    <div>
                        <h1 className='text-xl text-white font-semibold ml-10'>{data?.name}</h1>
                        <p className='text-md text-white font-semibold ml-10'>Amount: {data?.quantity}</p>
                        <p className='text-md text-white font-semibold ml-10'>Owner: {data?.wallet.slice(0,6)}...{data?.wallet.slice(36)}</p>
                    </div>
                 </div>
                 <div className='flex items-center my-3'>
                    <h1 className='text-md text-white font-semibold mr-5'>Price:</h1>
                    <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} name="" id=""  className="text-white bg-transparent border border-gray-400 rounded-lg px-2 py-1 outline-none w-full" placeholder='Listing Price'/>
                 </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-[#343D46] rounded-b">
                  <button
                    className="bg-[#B87333]  hover:bg-[#c07229] text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => listingHandler(data?.tokenId,price,data?.quantity,data?._id)}
                  >
                    List
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        </>
    )
}

export default UnListedModel