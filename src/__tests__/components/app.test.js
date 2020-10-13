import { getQueriesForElement } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import store from '../../store/store';
import App from '../../components/App/App';

describe('App', () => {
  it('Renders the correct content', () => {
    const root = document.createElement('div');
    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Provider>, root,
      );
    });

    const { getByText } = getQueriesForElement(root);
    getByText('The Bud Index');
  });
});
