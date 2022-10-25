import React from 'react';
import TaskItem from '../task-item/task-item';

function Task() {
  const tasks = [
    {
      id: 1,
      text: 'task 1',
      date: 'May 16, 2022',
    },
    {
      id: 2,
      text: 'task 2',
      date: 'May 17, 2022',
    },
    {
      id: 3,
      text: 'task 3',
      date: 'May 18, 2022',
    },
  ];

  return (
    <div>
      <ul>
        {tasks.map((task) => (<TaskItem key={task.id} task={task} />))}

      </ul>

    </div>
  );
}

export default Task;
