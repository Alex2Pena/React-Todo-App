import React from 'react';
import { useState, useEffect } from 'react';

function Tasks(props) {
    const [tasks, setTasks] = useState([{ text: "Pass 401", assigned: "Alex", status: true, difficulty: 3 }]); // this is an array so you need to append new items to the array

    const [value, setValue] = useState({}); //

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }



    return (
        <form onSubmit={function newTask(e) {
            e.preventDefault();
            if (!value.text || !value.assigned) return
            setTasks([...tasks, { ...value, status: false }])
            setValue({});
            e.target.reset();
        }} >
            
            <input name="difficulty" type="number" min="1" max="5" onChange={e => handleChange(e)} />
            <input name="text" placeHolder="Task Name....." onChange={e => handleChange(e)} />
            <input name="assigned" placeHolder="Assigned to:" onChange={e => handleChange(e)} />
            <input type="submit" />

            <ul>{tasks.map((task, index) => {
                let taskStyle = { color: "black", fontSize: "2em", textDecoration: task.status ? "line-through" : "none" };
                return <li onClick={() => {
                    console.log("clicked", index)
                    let editedTask = {...task, status: !task.status }
                    let newTasks = tasks
                    newTasks[index] = editedTask;
                    console.log(newTasks)
                    setTasks(newTasks)
                }} key={index} style={taskStyle}>{task.assigned} needs to {task.text}, Difficulty Level: {task.difficulty}</li>
            })}</ul>
        </form>
    )
}

export default Tasks;