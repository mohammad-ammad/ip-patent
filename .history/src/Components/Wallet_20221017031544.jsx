import React, { useState } from 'react'
const networks={ // defining network
    polygon:{
        chainId:`0x${Number(80001).toString(16)}`,
        chainName:"polygon Testnet",
        nativeCurrency:{
            name:"MATIC",
            symbol:"MATIC",
            decimals:18
        },
        rpcUrls:["https://rpc-mumbai.maticvigil.com/"],
        blockExplorerUrls:["https://mumbai.polygonscan.com/"]
    }
}
const Wallet = () => {
    const[Address,setAddress]=useState('');
    const connectWallet=async()=>{
        await window.ethereum .request({method:"eth_requestAccounts"});
        const provider=new ethers.provider.Web3Provider(window.ethereum,"any");
        setAddress(provider._getAddress());
    }
  return (
    <>
    <div onClick={connectWallet}></div>
    </>
  )
}

export default Wallet