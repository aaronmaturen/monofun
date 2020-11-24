import * as React from 'react';

export const Input = ({name:string, label:string, ...props}) => {
  <>
    <label for={name}>`${label}`</label>
    return <input name={name} {...props}/>;
  </>
};
