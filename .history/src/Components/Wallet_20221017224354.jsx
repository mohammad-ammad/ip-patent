import React, {  Children, createContext, useState } from 'react'
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
const WallentConnect=createContext();
const Wallet = ({Children})=> {
    const[address,setAddress]=useState('');
    const[balance,setBalance]=useState('');
    const connectWallet=async ()=>{
        // ethereum is an web3 provider
        await window.ethereum.request({method:"eth_requestAccounts"}) // using this method we will authenticate our metamask to with our project
        const provider=new ethers.providers.Web3Provider(window.ethereum,"any");
        if(provider.network!='matic')
        {
            await window.ethereum.request({
                method:'wallet_addEthereumChain',
                params:[
                    {
                        ...networks['polygon']
                    }
                ]
            })
            const account=provider.getSigner(); // getsigner use for the ethers
            const Address= await account.getAddress();
            setAddress(Address);
            const Balance=ethers.utils.formatEther( await account.getBalance());
            setBalance(Balance);
            console.log("Addresssss: ",address);
            console.log("Balance :",balance);
        }
       
    }
   
  return (
    <>
    <WallentConnect.Provider value={connectWallet}>{Children}</WallentConnect.Provider>
    </>
  )
}

export default {Wallet,WallentConnect}