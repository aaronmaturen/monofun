import * as React from 'react';

export const Input = ({name, label, ...props}) => {
  <>
    <label for={name}>`${label}`</label>
    return <input name={name} {...props}/>;
  </>
};
