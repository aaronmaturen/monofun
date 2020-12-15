import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Textarea } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const textarea = document.createElement('textarea');
    ReactDOM.render(<Textarea />, textarea);
    ReactDOM.unmountComponentAtNode(textarea);
  });
});
