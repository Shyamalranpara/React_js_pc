import React from 'react'

const Eprops = () => {
const HandleWelcomeuser=(user)=>{
    console.log(`welcome ${user}`)
    alert(`welcome ${user}`)
}
const HandleWelcomeuser2=()=>{
    console.log("welcome hover me")
    alert("welcome hover me")
}
  return (
    <div>
      <Welcomeuser
      onClick={()=>{HandleWelcomeuser("shyamal")}}
      onMouseEnter={()=>{HandleWelcomeuser2()}}
      />
    </div>
  )
}

const Welcomeuser=(props)=>{
const {onClick, onMouseEnter}=props;

const greeting=()=>{
    console.log("hello")
    alert("hello")
    onClick();
}
return(
    <>

    <br /><hr /><br />

    <button onClick={onClick}>click</button>
    <button onMouseEnter={onMouseEnter}>click</button>
    <button onClick={greeting}> click</button>   
     
    </>
)
}
export default Eprops
