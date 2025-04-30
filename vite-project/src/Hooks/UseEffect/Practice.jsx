import React, { useEffect, useState } from 'react'

const Practice = () => {
    const [store,setStore]=useState([])

    const app2 = 'https://fakestoreapi.com/products'
    
    const add=()=>{
        fetch(app2)
        .then(res=>res.json())
        // .then(json=>console.log(json))
        .then(json=>setStore(json))
        .catch((err)=>console.log(err))
    
    }
useEffect(()=>{
    
  add()

},[])
console.log(app2)
  return (
    <div>
      <h1>2</h1>
      <ul>
        {
            store.map((el=>(
                <li key={el}>
                    <h2>Id:{el.id}</h2>
                    <h3>Title:{el.title}</h3>
                </li>
            )))
        }
      </ul>
    </div>
  )
}

export default Practice
