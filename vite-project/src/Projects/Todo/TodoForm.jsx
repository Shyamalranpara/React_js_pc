import React, { useState } from 'react';

const TodoForm = ({ onAddTodo }) => {
    const [inputvalue, setinputvalue] = useState("");

    const Handlesubmit = (e) => {
        e.preventDefault();
        if (!inputvalue) return; // Prevent empty submission
        onAddTodo(inputvalue);
        setinputvalue("");
    };

    return (
        <section className='form'>
            <form onSubmit={Handlesubmit}>
                <div>
                    <input 
                        type="text" 
                        className='todo-input' 
                        autoComplete='off' 
                        value={inputvalue} 
                        onChange={(e) => setinputvalue(e.target.value)}
                    />
                </div>
                <div>
                    <button type='submit' className='todo-btn'>Add Task</button>
                </div>
            </form>
        </section>
    );
};

export default TodoForm;
