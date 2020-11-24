import * as React from 'react';

export const Input = ({...props}) => {
  <>
    <label htmlFor={props.name}>`${props.label}`</label>
    return <input name={props.name} {...props}/>;
  </>
};
