import React from 'react';
import TaskTracker from "./TaskTracker";
const TaskList = ({ tasks, selectTask }) => {

    return (
        <div>
            <h2>Task List</h2>
            <div>
                {tasks.map((task, index) => (
                    <p key={index} onClick={() => selectTask(task)}>
                       Name: {task.name} <br/>
                        Description: {task.description} <br/>
                        Date: {task.dueDate}
                    </p>
                ))}

            </div>
        </div>
    );
};

export default TaskList;
