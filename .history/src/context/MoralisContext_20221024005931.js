import React from 'react'
import axios from 'axios';
import { useState,createContext,useEffect } from 'react';
const MoralisContext = createContext();


const MoralisProvider = ({ children }) => {
const[Moralisresult,setMoralisResult]=useState([]);


  return (
  <>
  <MoralisContext Provider value={{Moralisresult}}>
    {children}
  </MoralisContext>
  </>
  )
}

export {MoralisProvider,MoralisContext};