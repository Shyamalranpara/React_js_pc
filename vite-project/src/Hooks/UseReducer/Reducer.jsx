import React, { useReducer } from 'react'

const Reducer = () => {

    const initialstate={
        count:0,
        inc:2,
        dec:2
    }
    
    const reducer=(state , action)=>{
        console.log(state,action)
        // if(action.type === "increment"){
        //     return state+1;
        // }

        // if(action.type === "decrement"){
        //     return state-1;
        // }
        // if(action.type === "reset"){
        //     return state=0;
        // }
        switch (action.type){
            case "increment":
            return {...state,count:state.count+1};

            case "decrement":
            return  {...state,count:state.count-1};

            case "reset":
            return {...state,count:0}

            default: 
            return state;
        }
    }
    // const [count , setcount]=useState(0) 
    const [state, dispatch]=useReducer(reducer, initialstate)
    console.log(useReducer(reducer, 0))
  return (
    
    <div className={`p-4 h-lvh flex flex-col justify-center items-center`}>

      <h1>hello Usereducer</h1>

<h2>{state.count}</h2>

    <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
    <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
    <button onClick={()=>dispatch({type:"reset"})}>reset</button>

    </div>
  )
}

export default Reducer
