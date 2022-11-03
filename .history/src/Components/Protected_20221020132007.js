import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const{Component}=props;
    const navigate=useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('tokenId')=='')
        {
            navigate('/login');
        }
        // console.log("token:",login);
        // if(!login){
        //     navigate('/login');
        // }
    })
  return (
   
        <Component/> 
   
  )
}

export default Protected