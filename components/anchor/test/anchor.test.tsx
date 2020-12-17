import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Anchor } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const a = document.createElement('a');
    ReactDOM.render(<Anchor />, a);
    ReactDOM.unmountComponentAtNode(a);
  });
});
