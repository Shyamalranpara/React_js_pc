import React, { useState } from 'react'

const ShortCircuitEx = () => {

    const[isloggedin,setloggedin]=useState(true)

    const[user,setuser]=useState("")

  return (
    <div style={{fontSize:"22px"}}>
      <section className='container short-container'>

        <h1 >Welcome to ShortCircuit evaluation!</h1>

       
        {isloggedin   &&   <p>you are logged in!</p>}

        {user ? `hello ${user}`: "you are logged in!"}

        <div className='grid-three-cols'>       

        <button onClick={()=>setloggedin(!isloggedin)}>Toggle login state</button><br /><br />
        <button onClick={()=>setuser("shyamal")}>set users</button><br /><br />
        <button onClick={()=>setuser("")}>clear user</button><br /><br />

        </div>

      </section>

    </div>
  )
}

export default ShortCircuitEx
