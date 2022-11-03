import React, { useEffect } from 'react'

const Protected = (props) => {
    const{Component}=props;
    const navigate=
    useEffect(()=>{
        let login=localStorage.getItem('login')
        if(!login){

        }
    })
  return (
   <>
        <Component/> 
   </>
  )
}

export default Protected