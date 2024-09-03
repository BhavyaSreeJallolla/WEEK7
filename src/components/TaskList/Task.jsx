import React from 'react';

const Task = ({ task }) => {
  return (
    <div>
      <h4>{task.description}</h4>
      <p>{task.completed ? 'Completed' : 'Not Completed'}</p>
    </div>
  );
};

export default Task;
