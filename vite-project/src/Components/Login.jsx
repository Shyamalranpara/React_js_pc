import React, { useState } from 'react'

const Login = () => {
    const [username,setuser]=useState("")
    const [password,setpassword]=useState("")

    const Handleform=(e)=>{
      e.preventDefault();
      
      const LoginData={
        username,
        password,
      };
    console.log(LoginData)

    }
   
  return (
    <div>
        <br />
      <hr />
    
      <h1>Login form</h1>
    
    <form onSubmit={Handleform}>

      <label htmlFor="username">username</label>
      <input type="text" name='username' value={username} onChange={(e)=>setuser(e.target.value)}/>

      <label htmlFor="password">password</label>
      <input type="text" name='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>

      <button type='submit'>submit</button>
    </form>
    </div>
  )
}

export default Login
