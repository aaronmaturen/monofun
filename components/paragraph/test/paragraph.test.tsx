import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Paragraph } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const image = document.createElement('image');
    ReactDOM.render(<Paragraph />, image);
    ReactDOM.unmountComponentAtNode(image);
  });
});
