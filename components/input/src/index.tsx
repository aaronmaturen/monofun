import * as React from 'react';

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({label, ...props}) => <>
  <label htmlFor={props.id}>{label}</label>
  <input {...props}/>;
</>;
