import { getQueriesForElement } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../components/App/App';

describe('App', () => {
  it('Renders the correct content', () => {
    const root = document.createElement('div');
    ReactDOM.render(<App />, root);

    const { getByText } = getQueriesForElement(root);
    getByText('The Bud Index');
  });
});
