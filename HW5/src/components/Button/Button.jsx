import React from 'react';

function Button({ text, handleFunc }) {
  return (
    <button onClick={handleFunc}>{text}</button>
  );
}

export default Button;