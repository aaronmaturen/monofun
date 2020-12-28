import * as React from 'react';
import { InputProps, Input } from '@aaronmaturen/monofun-input';

export interface PasswordProps extends InputProps {}

export const Password: React.FC<PasswordProps> = ({ label, ...props }) => (
  <>
    <label htmlFor={props.id}>{label}</label>
    <Input {...props} type="password" />;
  </>
);
