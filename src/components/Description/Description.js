import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './description.scss';
import { fetchDesc } from '../../fetch/fetch';

const Description = ({ strainID, location: { state: { strain } } }) => {
  const [name, { race, flavors, effects }] = strain;
  const [desc, setDesc] = useState('');
  fetchDesc(strainID)
    .then(data => data.json())
    .then(({ desc }) => setDesc(desc));
  return (
    <div className="description">
      <h1>{name}</h1>
      <div>
        {race}
      </div>
      <div className="description-box">
        <p>{desc}</p>
      </div>
      <ul className="flavors">
        <h3>Flavors:</h3>
        {flavors.map(flav => <li key={flav}>{flav}</li>)}
      </ul>
      <div>
        <h3>Effects:</h3>
        <div className="effects">
          {Object.entries(effects).map(item => (
            <ul key={item}>
              <h4>{item[0]}</h4>
              {item[1].map(effect => <li key={effect}>{effect}</li>)}
            </ul>
          ))}
        </div>
      </div>
    </div>

  );
};

Description.propTypes = {
  strainID: PropTypes.string,
  location: PropTypes.instanceOf(Object),
};
Description.defaultProps = {
  strainID: null,
  location: PropTypes.instanceOf(Object),
};
export default Description;
