import React from 'react'

function ListView() {
  return (
    <div>
        <hr />
      <div class="container mt-3" style={{backgroundColor:"green",height:"450px",width:"700px"}}>
  <h2 style={{padding:"30px",textAlign:"center"}}>The "React Way" to Render a List</h2>
  <ul class="list-group">
  
    <li style={{backgroundColor:"lightgreen",height:"40px",width:"400px",textAlign:"center",paddingTop:"7px",listStyle:"none",marginLeft:"138px"}}> <img src="https://static.vecteezy.com/system/resources/previews/017/177/791/original/round-check-mark-symbol-with-transparent-background-free-png.png" style={{height:"30px",marginTop:"-4px"}}></img> Use Array.map</li> 
    <li style={{backgroundColor:"lightgreen",height:"40px",width:"400px",textAlign:"center",paddingTop:"7px",listStyle:"none",marginLeft:"138px",marginTop:"40px"}}><img src="https://static.vecteezy.com/system/resources/previews/017/177/791/original/round-check-mark-symbol-with-transparent-background-free-png.png" style={{height:"30px",marginTop:"-4px"}}></img>Not a for loop </li>
    <li style={{backgroundColor:"lightgreen",height:"40px",width:"400px",textAlign:"center",paddingTop:"7px",listStyle:"none",marginLeft:"138px",marginTop:"40px"}}><img src="https://static.vecteezy.com/system/resources/previews/017/177/791/original/round-check-mark-symbol-with-transparent-background-free-png.png" style={{height:"30px",marginTop:"-4px"}}></img>Give each item a unique key</li>
    <li style={{backgroundColor:"lightgreen",height:"40px",width:"400px",textAlign:"center",paddingTop:"7px",listStyle:"none",marginLeft:"138px",marginTop:"40px"}}><img src="https://static.vecteezy.com/system/resources/previews/017/177/791/original/round-check-mark-symbol-with-transparent-background-free-png.png" style={{height:"30px",marginTop:"-4px"}}></img>Avoid using array index as the key</li>
   
  </ul>
</div><hr />
    </div>
  )
}

export default ListView

