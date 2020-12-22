import * as React from 'react';
export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export const Paragraph: React.FC<ParagraphProps> = (props) => <p {...props} />;
