import React, { useEffect, useState } from 'react'

const Clear = () => {
    const [count,setcount]=useState(0)

    useEffect(()=>{

       const timer = setInterval(() => {
            setcount((count)=>count+1)
        },[1000]);

    return()=>clearInterval(timer)
    
    },[])
  //  useEffect(()=>{document.title=`update:${count}`},[count]) 
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default Clear
