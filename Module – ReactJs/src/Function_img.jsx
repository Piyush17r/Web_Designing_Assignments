import React, { useState } from 'react'

function Function_img() {
  const [data,setData]=useState({
    number:1
  })
  return (
    <div>
      <button onClick={()=>setData({...data,number:data.number+1})}>+</button>
      <h1>{data.number}</h1>
      <button onClick={()=>setData({...data,number:data.number-1})}>-</button>
    </div>
  )
}

export default Function_img