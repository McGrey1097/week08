import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskDetail from './TaskDetail';
import AddTaskForm from './AddTaskForm';

const TaskTracker = () => {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null);
    const [isAddingTask, setIsAddingTask] = useState(false);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const selectTask = (task) => {
        setCurrentTask(task);
    };
    const handleClearTaskList = () => {
        selectTask(null);
        setTasks([]);
    }

    return (
        <div>
            <h1>Task Tracker</h1>
            {isAddingTask ? (
                <AddTaskForm addTask={addTask} setIsAddingTask={setIsAddingTask} />
            ) : (
                <>
                    <TaskList tasks={tasks} selectTask={selectTask}/>
                    <button onClick={handleClearTaskList}>
                        Clear Task List
                    </button> <br/>

                </>
            )}
            <button onClick={() => setIsAddingTask(!isAddingTask)}>
                {isAddingTask ? 'Cancel' : 'Add Task'}
            </button>
        </div>
    );
};

export default TaskTracker;
