import React from 'react';
import './filter.scss';

const Filter = () => (
  <div className="filter">
    <form>
      <select name="effect" id="effect">
        <option value="effect">effect</option>
      </select>
      <select name="flavor" id="flavor">
        <option value="flavor">flavor</option>
      </select>
      <button type="submit">Filter</button>
    </form>
  </div>
);

export default Filter;
