import * as React from 'react';

export const Input = ({...props}) => {
  return (
    <>
      <label htmlFor={props.name}>`${props.label}`</label>
      <input name={props.name} {...props}/>;
    </>
  )
};
