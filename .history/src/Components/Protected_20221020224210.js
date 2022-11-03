import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const{Component}=props;
    const navigate=useNavigate();
    useEffect(()=>{
        let login=localStorage.getItem('tokenId')
        console.log("token:",login);
        if(!login){
            navigate('/login');
        }
        else if(login==localStorage.getItem('tokenId'))
        {
          navigate('/landing');
        }
    })
  return (
   
        <Component/> 
   
  )
}

export default Protected