import * as React from 'react';
export interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {}
export const Textarea: React.FC<TextAreaProps> = (props) =>  <textarea {...props} />
