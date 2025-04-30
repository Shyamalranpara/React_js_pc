import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cardnd from './Cardnd'

const Get = () => {
    const [data,setData]=useState([])

    const API="https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"

    const getApi=async()=>{
        console.log("fetching data...")
const res= await axios.get(API);
console.log(res.data)
setData(res.data)
    }

    useEffect(()=>{
        getApi();
    },[])
  return (
    <div >
      <h1>New Api</h1>

   
      {
        data.map((e) => (
          <Cardnd key={e.id} movieData={e} />
        ))
      }
    </div>
  )
}

export default Get
