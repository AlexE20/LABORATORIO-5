import React from 'react';
import './Task.css';



const Task = ({ task, deleteTaskById, onCompletedTask }) => {
  return (
    <div className="task">
      <button className="complete-btn" onClick={() => onCompletedTask(task.id)}>
        {task.isCompleted ? (
          <span className="completed-icon">&#x2713;</span> 
        ) : (
          <span className="incomplete-circle">&#x25CB;</span> 
        )}
      </button>
      <span className={`task-title ${task.isCompleted ? 'completed' : ''}`}>
        {task.title}
      </span>
      <button className="delete-btn" onClick={() => deleteTaskById(task.id)}>
        <span role="img" aria-label="delete">&#x1F5D1;</span>
      </button>
    </div>
  );
};


export default Task;
