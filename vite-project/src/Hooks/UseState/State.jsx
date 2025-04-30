import React, { useState } from 'react'

const State = () => {
    const [count,setcount]=useState(0)
    const inc=()=>{
        setcount(count+1)
    }

    const dec=()=>{
        if(count > 0){
            setcount(count-1)
        }
    }


  return (
    <>
    <div>
        
       <h1>{count}</h1>

      <button onClick={inc}>increase</button>

      <button onClick={dec}>decrease</button>

    </div>

<Childcomponents count={count}/>

    </>
  )
  function Childcomponents({count}){
    
console.log("child componets is the render")
// alert("child componets is the render")
return(
<h2>child componets ={count}</h2>

)
  }
}




export const DerivedState=()=>{
  
const [users,setusers]=useState(
  [
    {name:"alica",age: 25},
    {name:"bob",age: 30},
    {name:"charlie",age: 35},
    {name:"angle",age: 34},
  
  ]
);
console.log(users);

/* Derived state : average state of the users */
const usercount=users.length;

console.log(usercount)

const averageage=users.reduce((accum,curelem)=> accum + curelem.age , 0)/usercount;

  // const {name,age}=users;  this way are the rong of the data is array of the object 
  return(

    <div>

<h1>Users List</h1>

<ul>

  {users.map(({name,age},index)=>(

<li key={index}>name: {name} , age: {age}</li>

  ))}

</ul>

<p>Total Users: {usercount}</p>

<p>Average:{averageage}</p>
    </div>

  )
}
export default State
