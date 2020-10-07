import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../components/App/App';

describe('App', () => {
  it('Renders the correct content', () => {
    const root = document.createElement('div');
    ReactDOM.render(<App />, root);
    expect(root.querySelector('h1').textContent).toMatch('The Bud Index');
  });
});
