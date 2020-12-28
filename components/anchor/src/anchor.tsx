import * as React from 'react';
export interface AnchorProps extends React.HTMLAttributes<HTMLAnchorElement> {}
export const Anchor: React.FC<AnchorProps> = (props) => <a {...props} />;