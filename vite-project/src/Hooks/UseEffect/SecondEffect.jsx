import React, { use, useEffect, useState } from 'react'

const SecondEffect = () => {
    const [name,setName]=useState("")
    const [tempName, setTempName] = useState("");
    const [update,setupdate]=useState(0)

    useEffect(()=>{
        
            console.log("entred name:",name)
            
    },[name])

    useEffect(()=>{
        
        console.log("entred name:",update)
        
},[update])

useEffect(()=>{
    document.title=`update:${update}`
},[update])

  return (
    <div>
        <br />
        <hr />

      <h1> name: {name}</h1>

      <h1>{update}</h1>

      <input type="text" placeholder='enter name'   value={tempName} 
                onChange={(e) => setTempName(e.target.value)} />

      <button onClick={()=>setName(tempName)}>click</button> <br />

      <button onClick={()=>setupdate(update+1)}>click</button>
    </div>
  )
}

export default SecondEffect
