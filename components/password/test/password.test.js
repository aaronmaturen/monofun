import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Password } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Password label="test" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
