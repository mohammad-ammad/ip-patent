import React from 'react'
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
    const connectWallet=async()=>{
        await window.ethereum .request({method:"eth_requestAccounts"});
        const provider=new ethers.provider.web
    }
  return (
    <>
    <div onClick={connectWallet}></div>
    </>
  )
}

export default Wallet