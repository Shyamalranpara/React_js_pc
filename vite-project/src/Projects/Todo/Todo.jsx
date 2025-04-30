import React, { useState } from 'react'
import './Todo.css'
import { MdCheck , MdDeleteForever } from "react-icons/md";

const Todo = () => {

    const [inputvalue,setinputvalue]=useState("")

    const Todoskey= "reacTodo";

    const [Task,setTask]=useState(()=>{

        const rawtodo = localStorage.getItem(Todoskey);

        if(!rawtodo) return[];

        return JSON.parse(rawtodo);

    })

    const [datetime,setdatetime]=useState("");

    const Handlesubmit=(e)=>{
        e.preventDefault();

        // step 1 to the user task add user data add
        if(!inputvalue)return;
        // setTask((prev)=>console.log(prev));


        // step 2 not add same data  and emty
        if(Task.includes(inputvalue)) {
            // return(alert("user exist")) way 1 alert 

            return setinputvalue("");
        }  

        // step 3 add data to click button to emty input box 

        setTask((prevtask)=>[...prevtask,inputvalue]);

        setinputvalue("")
    };

    // localStorage 

    localStorage.setItem("reactTodo", JSON.stringify(Task))

    setInterval(()=>{
        const now = new Date();
        const formdate = now.toLocaleDateString();
        const formtime = now.toLocaleTimeString();
        setdatetime (`${formdate}-${formtime}`)
      },1000);

// todo delete 

const Handledeletetodo=(value)=>{
    console.log(Task);
    console.log(value);
    
    const updatetask = Task.filter((curtask)=>curtask !== value);

    setTask(updatetask);

}
const Handleclearbtn=()=>{
    setTask([])
}
  return (
   <section className='todo-container'>

    <header>
        <h1>Todo List</h1>
        
        {/* <h5 className='date-time' style={{color:" #8dc6ff"}}>{datetime}</h5> */}
    </header>

    <section className='form'>
        
        <form onSubmit={Handlesubmit}>

            <div>

                <input type="text" 
                className='todo-input' 
                autoComplete='off' 
                value={inputvalue} 
                onChange={(e)=>setinputvalue(e.target.value)}
                />

            </div>

            <div>
                <button type='submit' className='todo-btn'>Add Task</button>
            </div>

        </form>

    </section>

<section className='myUnOrderList'>
    <ul>
        {
            Task.map((curtask,index)=>{

                return <li key={index} className='todo-item'>

                    <span >{curtask}</span>

                    <button className='check-btn'> <MdCheck /> </button>

                    <button className='delete-btn' onClick={()=>Handledeletetodo(curtask)}> 
                        <MdDeleteForever /> 
                        </button>
                </li>

            })
        }
    </ul>
    <section >
<button className='clear-btn' onClick={Handleclearbtn}>Clear All</button>
    </section>
</section>

   </section>
  )
}

export default Todo
