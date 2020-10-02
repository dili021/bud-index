import React from 'react';
import './App.scss';
import { Router } from '@reach/router';
import Home from '../Home/Home';
import Description from '../Description/Description';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Description path="/:strainID/description" />
      </Router>
    </div>
  );
}

export default App;
