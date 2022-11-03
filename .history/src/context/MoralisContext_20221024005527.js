import React from 'react'
import axios from 'axios';
import { useState,createContext } from 'react';

const[Moralisresult,setMoralisResult]=useState([]);

useEffect(()=>{
const options = {
method: 'GET',
url: `https://deep-index.moralis.io/api/v2/nft/${process.env.REACT_APP_DEPLOYED_CONTRACT}`,
params: {chain: 'goerli', format: 'decimal'},
headers: {accept: 'application/json', 'X-API-Key': `${process.env.REACT_APP_Moralis_API_KEY}`}
};

axios
.request(options)
.then( (response)=> {
    setMoralisResult(response.data.result);
  console.log("Moralis response :",response.data.result);
  console.log("set state:",Moralisresult);

})
.catch((error)=> {
  console.error(error);
});
},[]);
const MoralisProvider = ({ children }) => {
const MoralisContext = createContext();
  return (
  <>
  <MoralisContext Provider value={{Moralisresult}}>
    {children}
  </MoralisContext>
  </>
  )
}

export {MoralisProvider,MoralisContext};