import React from 'react';
import './App.scss';
import { Router } from '@reach/router';
import Results from '../Results/Results';
import Filter from '../Filter/Filter';
import Description from '../Description/Description';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <div className="index" path="/"> */}
        {/* <Filter /> */}
        <Results path="/" />
        {/* </div> */}
        <Description path="/:strainID/desc" />
      </Router>
    </div>
  );
}

export default App;
