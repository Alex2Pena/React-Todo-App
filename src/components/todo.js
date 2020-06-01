import React from 'react';
import { useState, useEffect } from 'react';
import '../components/todo.scss';


function Tasks({ setCompletedProps, setIncompleteProps }) {
    
    const [tasks, setTasks] = useState([]); // this is an array so you need to append new items to the array
    const [value, setValue] = useState({}); // this is the object that will hold each tasks key value pairs

    useEffect(() => {
        let cCount = 0;
        let iCount = 0;
        tasks.map(task => {
            if (task.status) {
                cCount++;
            } else {
                iCount++
            }
        });
        setCompletedProps(cCount);
        setIncompleteProps(iCount);

    }, [tasks]);

    const handleClick = (e) => {
        console.log("clicked", e.target.getAttribute('taskNum'));
        let elementIndex = e.target.getAttribute('taskNum');
        console.log("tasks", tasks);
        let editedTask = { ...tasks[elementIndex] } // making copies
        editedTask.status = !editedTask.status;
        console.log("edited task", editedTask);
        let newTasks = [...tasks]; // creates and spreads a "deep" copy tasks list
        newTasks[elementIndex] = editedTask; // update specific index of the coppied array
        console.log("new tasks", newTasks)
        setTasks(newTasks); // 99% of 'newTasks' is the SAME data but with a new reference so that
        console.log('these are the tasks', tasks);
    };


    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    const handleDelete = (index) => {
        let newTasks = tasks.splice(index,1);
        setTasks(newTasks);
    }

    return (
        <form onSubmit={function newTask(e) {
            e.preventDefault();
            if (!value.text || !value.assigned) return
            setTasks([...tasks, { ...value, status: false }])
            setValue({});
            e.target.reset();
        }}>

            <input name="priority" type="number" min="1" max="5" onChange={e => handleChange(e)} />
            <input name="text" placeHolder="What is there to do......." onChange={e => handleChange(e)} />
            <input name="assigned" placeHolder="Who has to do it......" onChange={e => handleChange(e)} />
            <input type="submit" />
            <ul>
                {tasks.map((task, index) => {
                    let taskStyle = {
                        color: "black",
                        fontSize: "1.5em",
                        textDecoration: task.status ? "line-through" : "none"
                    };
                    return <li onClick={handleClick} taskNum={index} key={index} style={taskStyle}>
                        <button onClick={()=>handleDelete(index)}>Delete</button>
                        Priority: {task.priority}      {task.assigned}  needs to  {task.text}
                    </li>
                })}
            </ul>
        </form >
    )
}

export default Tasks;