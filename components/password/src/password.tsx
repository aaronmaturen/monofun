import * as React from 'react';
import { InputProps, Input } from '@aaronmaturen/monofun-input';

export interface PasswordProps extends InputProps {}

export const Password: React.FC<PasswordProps> = props => (
  <>
    <Input {...props} />;
  </>
);
