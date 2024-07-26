import React, { useState } from 'react';
import './TaskForm.css'
function TaskForm({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(task);
    setTask('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
    <input
      type="text"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      placeholder="Enter   
a task"
      className="task-input"
    />
    <button type="submit" className="add-task-button">
      Add Task
    </button>
  </form>
  );
}

export default TaskForm;
