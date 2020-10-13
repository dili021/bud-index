import React, { useEffect } from 'react';
import './App.scss';
import { Router } from '@reach/router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from '../Home/Home';
import Description from '../Description/Description';
import { fetchStrains } from '../../store/actions/strains';

const App = ({ fetchStrains }) => {
  useEffect(() => {
    fetchStrains();
  }, [fetchStrains]);

  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Description path="/:strainID/description" />
      </Router>
    </div>
  );
};

App.propTypes = {
  fetchStrains: PropTypes.func.isRequired,
};

const mapState = state => state;
const mapDispatch = dispatch => ({
  fetchStrains: () => dispatch(fetchStrains()),
});
export default connect(mapState, mapDispatch)(App);
