import React, { useEffect, useState } from 'react';

import './filter.scss';
import { v4 as uuid } from 'uuid';
import { fetchEffects } from '../../../fetch/fetch';

const Filter = () => {
  // console.log(effects);
  const [fx, setFx] = useState([]);
  fetchEffects().then(res => setFx(res));

  return (
    <div className="filter">
      <form>
        <select name="effect" id="effect">
          {fx.map(({ effect }) => <option key={uuid()} value={effect}>{effect}</option>)}
        </select>
        <select name="flavor" id="flavor">
          <option value="flavor">flavor</option>
        </select>
        <button type="submit">Filter</button>
      </form>
    </div>
  );
};
export default Filter;
