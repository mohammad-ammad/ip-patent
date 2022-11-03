import React, { useState,createContext } from "react";
import { ethers } from 'ethers';


const AuthContext = createContext();
// const networks={ 
//     polygon:{
//         chainId:`0x${Number(80001).toString(16)}`,
//         chainName:"polygon Testnet",
//         nativeCurrency:{
//             name:"MATIC",
//             symbol:"MATIC",
//             decimals:18
//         },
//         rpcUrls:["https://rpc-mumbai.maticvigil.com/"],
//         blockExplorerUrls:["https://mumbai.polygonscan.com/"]
//     }
// }
const AuthProvider = ({ children }) => {
    const[address,setAddress]=useState('');
    const[balance,setBalance]=useState('');
    const connectWallet=async ()=>{
        await window.ethereum.request({method:"eth_requestAccounts"}) // using this method we will authenticate our metamask to with our project
        const provider=new ethers.providers.Web3Provider(window.ethereum,"any");
        console.log(provider)
        if(provider.network!='goerli')
        {
            // await window.ethereum.request({
            //     method:'wallet_addEthereumChain',
            //     params:[
            //         {
            //             ...networks['goerli']
            //         }
            //     ]
            // })
            const account=provider.getSigner(); // getsigner use for the ethers
            const Address= await account.getAddress();
            setAddress(Address);
            const Balance=ethers.utils.formatEther( await account.getBalance());
            setBalance(Balance);
            console.log("balance:",balance);
            console.log("address:",address);

        }
       
    }
    return (
      <AuthContext.Provider value={{connectWallet,address}}>
        {children}
      </AuthContext.Provider>
    );
  };

  export { AuthProvider,AuthContext };