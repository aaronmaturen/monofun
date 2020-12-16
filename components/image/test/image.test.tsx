import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Image } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const image = document.createElement('image');
    ReactDOM.render(<Image />, image);
    ReactDOM.unmountComponentAtNode(image);
  });
});
