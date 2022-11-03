import React from 'react'
const[Resresult,setResult]=useState([]);
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
 setResult(response.data.result);
  console.log("Moralis response :",response.data.result);
  console.log("set state:",Resresult);

})
.catch((error)=> {
  console.error(error);
});
},[]);
const MoralisContext = () => {
  return (
  <>
  
  </>
  )
}

export default MoralisContext