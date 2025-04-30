const Add_task='Add_task'
const Delete_task='Delete_task'

const initialState={
    task:[],
}

const reducer=(state=initialState,action)=>{
    switch(action.type){

        case Add_task:
            return{
...state,task:[...state.task,action.payload]
            }

    case Delete_task:
        return{
            ...state,
            task:state.task.filter((t,index)=>index!==action.payload)
        };
          
    default:
        return state;
    };

}