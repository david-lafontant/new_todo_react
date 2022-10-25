import PropTypes from 'prop-types';
import React from 'react';

function TaskItem({ task }) {
  return (

    <li id={task.id}>
      <span>{task.text}</span>
      <span>
        date:
        {task.date}
      </span>
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskItem;
