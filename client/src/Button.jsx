import React from 'react';

const Button = (props) => {
  return (
    <button 
      type={props.type || 'button'} // Default to 'button' if no type is provided
      onClick={props.onClick}
      style={props.style} // Allow passing styles as props
    >
      {props.text}
    </button>
  );
};

export default Button;
