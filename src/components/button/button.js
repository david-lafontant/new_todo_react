import React from 'react';
// import PropTypes from 'prop-types';
import styles from './button.module.css';

// 8494396811
// carlos

function Button() {
  return (
    <div>
      <input className={styles.myButton} type="button" value="Add Task" />
    </div>
  );
}

// Button.propTypes = {};

export default Button;
