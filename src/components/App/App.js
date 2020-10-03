import React from 'react';
import './App.scss';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';
import Home from '../Home/Home';
import Description from '../Description/Description';
import store from '../../store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Home path="/" />
          <Description path="/:strainID/description" />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
