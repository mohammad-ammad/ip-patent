import React, { useEffect } from 'react'
import axios from 'axios';
const Detail = () => {
useEffect(()=>{

const options = {
  method: 'GET',
  url: `https://deep-index.moralis.io/api/v2/nft/${process.env.REACT_APP_DEPLOYED_CONTRACT}/4/owners`,
  params: {chain: 'goerli', format: 'decimal'},
  headers: {
    accept: 'application/json',
    'X-API-Key': '4h9SZohuOhVTeQ2ihtrOqR0ASzzXlZMSRLMrTNU98oQiOEWqeY5ZxxkIjQ230Oak'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
})
  return (
    <>

    </>
  )
}

export default Detail