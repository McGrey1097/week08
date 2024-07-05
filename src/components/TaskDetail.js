import React from 'react';

const TaskDetail = ({ task }) => {

    return (
        <div>
            <h2>Task Detail</h2>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <button >Task Detail</button>
        </div>
    );
};

export default TaskDetail;
