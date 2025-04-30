import React, { useState } from 'react'

const Ptodo = () => {
    const[user,setuser]=useState("")

    const[task,setTask]=useState([])


    const Hsubmit=(e)=>{
        e.preventDefault()

        if(!user)return;
        // setTask((prev)=>console.log(prev))

        if(task.includes(user)){
            return setuser("")
        }

        setTask((pretask)=>[...pretask,user]);
        setuser("")
    }
    const getDateTime=()=>{
      const now = new Date();
      const formdate = now.toLocaleDateString();
      const formtime = now.toLocaleTimeString();
    }


  return (
    <div>
      <h1>new todo</h1>

      <div>
        <form onSubmit={Hsubmit}>

            <input type="text" 
            placeholder='enter the name'
            value={user}
            autoComplete='off'
            onChange={(e)=>setuser(e.target.value)}
            />

            <button type='submit'>submit</button>
        </form>
      </div>

      <div>
        <ul>
            {task.map((el,i)=>(
                <li key={el}>
                    <span>{el}</span>
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Ptodo
