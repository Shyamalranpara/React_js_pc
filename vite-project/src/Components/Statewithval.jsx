import React, { useState } from 'react'

const Statewithval = () => {
    const [count,setcount]=useState(0)

    const [countwithnum , setcountwithnum]=useState(0)

    const inc=()=>{
        setcount(count+1)
    }
    const dec=()=>{
        if(count>0){
            setcount(count-1)
        }
    }
    const reset=()=>{
        setcount(0)
    }

   
    const incwithnum = () => {
        setcount(prevCount => prevCount + countwithnum);
    };

    const decwithnum = () => {
        setcount(prevCount => (prevCount > 0 ? prevCount - countwithnum : prevCount));
    };

    const resetnum = () => {
        setcountwithnum(0);
    };
  return (
    <div style={{fontSize:"20px"}}>
      <h1>incerement with number</h1>

    <h2>{count}</h2>
      <button onClick={inc}>increse</button><br /><br />
      <button onClick={dec}>decrese</button><br /><br />
      <button onClick={reset}>reset</button><br /><br />

    <h2>{countwithnum}</h2>
      <input type="number" placeholder='enter the num' value={countwithnum} onChange={(e)=>setcountwithnum(Number(e.target.value))}/><br /><br />

      <button onClick={incwithnum}>increse with num </button><br /><br />
      <button onClick={decwithnum}>decrese with num </button><br /><br />
      <button onClick={resetnum}>reset with num </button><br /><br />

    </div>
  )
}

export default Statewithval
