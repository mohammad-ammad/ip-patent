import React, { useState } from 'react'
// import { ethers } from 'ethers';
const ethers = require("ethers");
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
    const[address,setAddress]=useState('');
    const connectWallet=async()=>{
        await window.ethereum .request({method:"eth_requestAccounts"});
        const provider=new ethers.provider.Web3Provider(window.ethereum,"any");
        const account=provider.getSigner();
        const Address=await account.getAddress();
        setAddress(Address);
    }
  return (
    <>
    <div onClick={connectWallet}></div>
    </>
  )
}

export default Wallet