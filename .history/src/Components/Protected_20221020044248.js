import React from 'react'

const Protected = (props) => {
    const{component}=props;
  return (
   <>
        <component/>
   </>
  )
}

export default Protected