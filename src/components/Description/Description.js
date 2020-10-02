import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './description.scss';
// import fetchProps from '../../fetch/fetch';

const fetchDesc = async id => {
  const desc = await fetch(`http://strainapi.evanbusse.com/dbRRX3S/strains/data/desc/${id}`);
  return desc;
};

const Description = ({ strainID }) => {
  const [desc, setDesc] = useState('');
  fetchDesc(strainID).then(data => data.json()).then(({ desc }) => setDesc(desc));

  return (
    <div className="description">
      <p>{desc}</p>
    </div>

  );
};

Description.propTypes = {
  strainID: PropTypes.string,
};
Description.defaultProps = {
  strainID: null,
};
export default Description;
