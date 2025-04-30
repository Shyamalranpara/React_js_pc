import React, { useId, useState } from 'react'

const index = () => {
    const Id=useId();

    const [form,setForm]=useState({
        username:'',
        email:'',
        password:'',
    })

    const Handleform=(e)=>{
        e.preventDefault()
        console.log('Form submitted:', form);
    }

    const HandleChange=(e)=>{
        setForm((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
          }));
    }
    
  return (
    <div>
      <form onSubmit={Handleform} style={{ fontSize: '20px' }}> 

 <label htmlFor={Id+"nameId"}>username:</label>
<input type="text" 
placeholder='enter name'
name='username'
id={Id+"username"}
value={form.username}
onChange={HandleChange}/>


<label htmlFor={Id+"emailId"}>email:</label>
<input type="text"
placeholder='enter email'
name='email'
id={Id+"email"}
value={form.email}
onChange={HandleChange} />

<label htmlFor={Id+"passwordId"}>password:</label>
<input type="text" 
placeholder='enter password'
name='password'
id={Id+"password"}
value={form.password}
onChange={HandleChange}/>

<button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default index
