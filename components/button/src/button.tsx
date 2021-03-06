import * as React from 'react';
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}
export const Button: React.FC<ButtonProps> = props => <button {...props} />;
