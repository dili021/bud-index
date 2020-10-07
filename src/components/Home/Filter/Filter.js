import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { fetchEffects, fetchFlavours } from '../../../fetch/fetch';
import { addFilter, clearFilter } from '../../../store/actions/filter';
import './filter.scss';

const Filter = state => {
  const [fx, setFx] = useState([]);
  const [flavors, setFlavors] = useState([]);
  const { addFilter, clearFilter } = state;

  const handleChange = ({ target: { value } }) => {
    addFilter(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    clearFilter();
  };
  useEffect(() => {
    fetchEffects().then(res => setFx(res));
    fetchFlavours().then(res => setFlavors(res));
  }, []);

  const fxList = fx.map(({ effect }) => (
    <option key={uuid()} value={effect}>
      {' '}
      {effect}
    </option>
  ));

  const flavorsList = flavors.map(flav => <option key={uuid()} value={flav}>{flav}</option>);

  return (
    <div className="filter">
      <form
        onChange={e => handleChange(e)}
        onSubmit={e => handleSubmit(e)}
      >
        <select name="effect" defaultValue id="effect">
          <option disabled>Effects</option>
          {fxList}
        </select>
        <select name="flavor" defaultValue id="flavor">
          <option disabled>Flavors</option>
          {flavorsList}
        </select>
        <button type="submit">Clear Filter</button>
      </form>
    </div>
  );
};

const mapState = ({ state }) => ({ state });
const mapDispatch = dispatch => ({
  addFilter: filter => dispatch(addFilter(filter)),
  clearFilter: () => dispatch(clearFilter()),
});

export default connect(mapState, mapDispatch)(Filter);
