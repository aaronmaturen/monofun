import * as React from 'react';
export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {}
export const Image: React.FC<ImageProps> = (props) => <img {...props} />;