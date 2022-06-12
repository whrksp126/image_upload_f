import React from 'react'

const CustomInput = ({label, value, setValue, type="text"}) => {

  return (
    <div>
      <label>{label}</label>
      <input 
        value={value} 
        type={type}
        onChange={(e)=>{setValue(e.target.value)}} 
        style={{width:"100%"}}  
      />
  </div>
  )
}

export default CustomInput