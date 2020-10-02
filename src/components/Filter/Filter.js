import React from 'react';

const Filter = () => (
  <div className="form-wrap">
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
