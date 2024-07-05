import React, { useState } from 'react';

const AddTaskForm = ({ addTask, setIsAddingTask }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            name,
            description,
            dueDate
        };
        addTask(newTask);
        setIsAddingTask(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Task</h2>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <br />
            <label>
                Description:
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </label>
            <br />
            <label>
                Due Date:
                <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
            </label>
            <br />
            <button type="submit">Add Task</button>
            <button type="button" onClick={() => setIsAddingTask(false)}>Cancel</button>
        </form>
    );
};

export default AddTaskForm;
