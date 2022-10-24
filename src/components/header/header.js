import PropTypes from 'prop-types';
import React from 'react';
import Button from '../button/button';

function Header({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <Button />
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
