import React, { useEffect } from 'react'

const Protected = (props) => {
    const{Component}=props;
    useEffect(()=>{
        let login=localStorage.getItem('')
    })
  return (
   <>
        <Component/> 
   </>
  )
}

export default Protected