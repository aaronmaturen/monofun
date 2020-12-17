import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Image } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Image />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
