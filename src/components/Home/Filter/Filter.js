import React, { useState } from 'react';

import './filter.scss';
import { v4 as uuid } from 'uuid';
import { fetchEffects } from '../../../fetch/fetch';

const Filter = () => {
  // console.log(effects);
  const [fx, setFx] = useState([]);
  fetchEffects().then(res => setFx(res));

  const fxList = fx.map(({ effect }) => <option key={uuid()} value={effect}>{effect}</option>);

  return (
    <div className="filter">
      <form>
        <select name="effect" id="effect">
          {fxList}
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
