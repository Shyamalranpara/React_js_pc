import React, { useRef } from 'react'

const Ref = () => {
    const name = useRef(null)
    const password = useRef(null)

    const hfomr=(e)=>{
        e.preventDefault()
        console.log(name.current.value,password.current.value)
    }

const New=()=>{
  const username = useRef(null)
  const password = useRef(null)

  const handleForm=(e)=>{
    e.preventDefault()
  }
  return(
<>

<form onSubmit={handleForm}>

<New lable="username"/>        
<New lable="password"/>        

      </form>
</>
  )
}
  return (
    <div>
        <form onSubmit={hfomr}>
      <input type="text" placeholder='name' id='name' ref={name}/>
      <input type="text" placeholder='password' id='password' ref={password}/>
      <button type='submit'> submit</button>
      </form>


    </div>
  )
}

export default Ref
