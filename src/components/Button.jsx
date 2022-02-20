import React from 'react';

const Button = ({ onClick, children, uniclass = '' }) => {
  return (
    <button className={`button ${uniclass}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
