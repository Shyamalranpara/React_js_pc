import React from 'react'

 export const PropDriling = () => {
  return (
    <div>

      <section className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center item-center bg-gray-900 `}> <h1 style={{color:"whitesmoke"}}>Component 1</h1></section>
    <ChildCom data="react/js"/>
    </div>
  )
}

const ChildCom=({data})=>{
    return(
        <>
      <section className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center item-center bg-gray-900 `}> <h1 style={{color:"whitesmoke"}}>Component 2  {data}
      </h1></section>
        
       
        <GrandChildCom data={data}/>
        </>
    )
}

const GrandChildCom=({data})=>{
    return(
        <>
        
        <section className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center item-center bg-gray-900 `}> <h1 style={{color:"whitesmoke"}}>Component 3  {data}
      </h1></section>
        
      <GrandGrandChildCom data={data}/>
        </>
    )
}
const GrandGrandChildCom =({data})=>{
    return(
        <>
           
           <section className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center item-center bg-gray-900 `}> <h1 style={{color:"whitesmoke"}}>Component 4  {data}
      </h1></section>
        </>
    )
}