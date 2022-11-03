import React, { useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
const Detail = () => {
const[Moralisresult,setMoralisResult]=useState([]);

useEffect(()=>{

const options = {
  method: 'GET',
  url: `https://deep-index.moralis.io/api/v2/nft/${process.env.REACT_APP_DEPLOYED_CONTRACT}/4/owners`,
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
    <h1>Welcome </h1>
    </>
  )
}

export default Detail