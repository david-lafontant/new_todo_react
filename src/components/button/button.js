import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

// 8494396811
// carlos

function Button({ text }) {
  return (
    <div>
      <input className={styles.myButton} type="button" value={text} />
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
