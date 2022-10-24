import PropTypes from 'prop-types';
import React from 'react';
import Button from '../button/button';

function Header({ title }) {
  return (
    <div>
      <h1 style={{ color: 'red', fontSize: '2rem', fontWeight: 'bold' }}>{title}</h1>
      <Button text="Add Task" />
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
