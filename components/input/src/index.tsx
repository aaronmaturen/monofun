import * as React from 'react';

export const Input = ({label, ...props}) => {
  return (
    <>
      <label htmlFor={props.id}>`${props.label}`</label>
      <input {...props}/>;
    </>
  )
};
