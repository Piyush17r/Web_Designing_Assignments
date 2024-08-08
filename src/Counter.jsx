import React, { useState } from 'react'

function Counter() {
  const [data, setData] = useState({
    number: 1
  })
  return (

    <div style={{ textAlign: "center", }}><h3>Create counter app program shown below</h3>

      <h1>
        counter app
      </h1>
      <h1>
        <h1>{data.number}</h1>
      </h1>

      <button onClick={() => setData({ ...data, number: data.number + 1 })} style={{ backgroundColor: "green", width: "120px", height: "40px", fontSize: "15px", marginRight: "15px", color:"white"}}  >INCREMENT</button>
      <button onClick={() => setData({ ...data, number: data.number - 1 })} style={{ backgroundColor: "red", width: "120px", height: "40px", fontSize: "15px", color:"white"}}>DECREMENT</button><br /><hr></hr>
     {/* <h3>Create Login Lout React program as below</h3> */}
    </div>
  )
}
export default Counter