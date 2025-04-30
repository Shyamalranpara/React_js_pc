import { createstore } from "redux"; // Import createStore from Redux

const Add_task = "task/add";
const Delete_task = "task/delete";

const initialState = {
  task: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_task:
      return {
        ...state,
        task: [...state.task, action.payload], // Add a new task
      };

    case Delete_task:
      return {
        ...state,
        task: state.task.filter((t, index) => index !== action.payload), // Remove task by index
      };

    default:
      return state; // Return the current state for unmatched actions
  }
};

// Step 2: Create the Redux store
const store = createstore(taskReducer);
console.log(store);

export default taskReducer;