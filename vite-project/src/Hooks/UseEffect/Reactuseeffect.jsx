import React, { useEffect, useState } from 'react'

const Reactuseeffect = () => {

    const [count,setcount]=useState(0);

    const [date,setdate]=useState("")


    useEffect(()=>{
        console.log("count value:",count)
    },[count])

    useEffect(()=>{

        setInterval(()=>{const updatetime = new Date();
        setdate(updatetime.toLocaleTimeString());},1000)
        
    },[])
   
  return (
    <div>
      <h1>Use Effects</h1>
      <h2>{count}</h2>
      <h2>{date}</h2> 
      <button onClick={()=>setcount(count+1)}>increse</button>
    </div>
  )
}

export default Reactuseeffect