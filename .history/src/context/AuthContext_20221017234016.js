import React, { createContext } from "react";
const AuthContext = createContext();
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
const AuthProvider = ({ children }) => {
    const connectWallet = () => 
    {
        console.log("connect")
    }
    return (
      <AuthContext.Provider value={{connectWallet}}>
        {children}
      </AuthContext.Provider>
    );
  };

  export { AuthProvider,AuthContext };