import React, { createContext } from "react";
const AuthContext = createContext();

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