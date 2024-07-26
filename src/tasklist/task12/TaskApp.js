import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function TaskApp() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    // Optimistic update
    setTasks([...tasks, newTask]);

    // Simulate server request
    setTimeout(() => {
      // Handle success or failure
      console.log('Task created successfully!');
    }, 2000);
  };

  return (
    <div>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default TaskApp;
