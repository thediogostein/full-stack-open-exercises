import React from 'react';

export const Button = ({ handleClick, btnText }) => {
  return <button onClick={() => handleClick()}>{btnText}</button>;
};
