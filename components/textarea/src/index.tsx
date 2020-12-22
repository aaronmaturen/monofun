import * as React from 'react';
export interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {}
export const TextArea: React.FC<TextAreaProps> = (props) =>  <textarea {...props} />