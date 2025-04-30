import React, { useState } from 'react'

const LiftingupState = () => {
  const [inputval,setinputval]=useState("");

  return (
    <div>
      <input type="text" placeholder='enter your name' value={inputval} onChange={(e)=>setinputval(e.target.value)}/>
    </div>
  )
}

 export const Displaydata=()=>{
  return(
    <p>the current input val is : </p>
  )
}
export default LiftingupState
