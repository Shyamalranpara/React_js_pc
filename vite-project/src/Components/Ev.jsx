import React from 'react'
import './Ev.css'

const Ev = () => {
    const handleButtonClick = (event) => {
        console.log(event) 
        // SyntheticBaseEvent

        alert('button clicked')
    }

    const handleWelcome = (user) => {
        console.log(`hey ${user} welcome!`)
    }
  return (
    <div>
      <h1>Event Handle</h1>
        <br />
      <button onClick={handleButtonClick}>click me</button> 
      {/* name function  allow the by defualt SyntheticBaseEvent*/}

      <button onClick={()=>handleButtonClick(event)}>click me 2</button>

      {/*  in onclick  arrow function is the compl call( ) and access 
      
      not allow by default SyntheticBaseEvent access the event to (event) call pass the event*/}

      <button onClick={(event)=>console.log(event)}>3rd btn</button>

      <button onClick={()=>alert("hey click the btn")}>alert</button>

      {/* <button onClick={handleWelcome ("shyamal")}>Welcome btn</button> */}
      <button onClick={()=> handleWelcome ("shyamal")}>Welcome btn</button>
      <button onClick={()=> handleWelcome ("ram")}>Welcome btn2</button>


    </div>
  )
}

export default Ev
