import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const addTask = async (task) => {
        try {
            const response = await axios.post('http://localhost:5000/tasks', task);
            setTasks([...tasks, response.data]);
        } catch (error) {
            console.error(error);
        }
    };

    const updateTask = async (id, updatedTask) => {
        try {
            const response = await axios.put(`http://localhost:5000/tasks/${id}`, updatedTask);
            setTasks(tasks.map(task => task._id === id ? response.data : task));
        } catch (error) {
            console.error(error);
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/tasks/${id}`);
            setTasks(tasks.filter(task => task._id !== id));
        } catch (error) {
            console.error(error);
        }
    };
  return (
    <>
        <div className="container bg-[#f8f9fa] p-[20px]">
            <h1>Pet To-Do List</h1>
            <ul>
                {tasks.map(task => (
                    <div key={task._id} className="bg-[#fff] p-2.5 mx-2.5 rounded-md flex justify-between items-center shadow-md">
                        <span>{task.title}</span>
                        <div>
                            <button onClick={() => updateTask(task._id, { completed: !task.completed })}
                                    className="bg-[#007bff] text-white px-1.5 py-2.5 border-0 cursor-pointer hover:bg-[#0056b3]">
                                {task.completed ? 'Undo' : 'Complete'}
                            </button>
                            <button onClick={() => deleteTask(task._id)}
                                    className="bg-[#007bff] text-white px-1.5 py-2.5 border-0 cursor-pointer hover:bg-[#0056b3]">Delete</button>
                        </div>
                    </div>
                ))}
            </ul>
            <button onClick={() => addTask({ title: 'New Task' })}
                    className="bg-[#007bff] text-white px-1.5 py-2.5 border-0 cursor-pointer hover:bg-[#0056b3]">Add Task</button>
        </div>
    </>
  )
}

export default TaskList