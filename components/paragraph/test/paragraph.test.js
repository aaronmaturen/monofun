import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Paragraph } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Paragraph />, div );
    ReactDOM.unmountComponentAtNode(div);
  });
});
