import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const button = document.createElement('button');
    ReactDOM.render(<Button />, button);
    ReactDOM.unmountComponentAtNode(button);
  });
});
