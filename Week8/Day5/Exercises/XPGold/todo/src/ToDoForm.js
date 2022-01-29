import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        // console.log(e.key)
        if(e.key === 'Enter'){
        addTask(userInput);
        setUserInput("");
        e.preventDefault();

        }
    }
    return (
        <form onKeyPress={handleSubmit}>
            <input id="userInput" value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
        </form>
    );
};

export default ToDoForm;