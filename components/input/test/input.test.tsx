import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Input } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const input = document.createElement('input');
    ReactDOM.render(<Input />, input);
    ReactDOM.unmountComponentAtNode(input);
  });
});
