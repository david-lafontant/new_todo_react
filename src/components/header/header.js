import React from 'react';
import Button from '../button/button';

function Header(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <Button />
    </div>
  );
}



export default Header;
