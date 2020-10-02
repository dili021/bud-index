import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchProps from '../../fetch/fetch';
import './description.scss';

const fetchDesc = async id => {
  const desc = await fetch(`http://strainapi.evanbusse.com/dbRRX3S/strains/data/desc/${id}`);
  return desc;
};

const Description = ({ strainID }) => {
  const [desc, setDesc] = useState('');
  fetchDesc(strainID).then(data => data.json()).then(({ desc }) => setDesc(desc));
  // fetchDesc().then(data => data).then(res => setDesc(res.json()));
  // fetch('http://strainapi.evanbusse.com/dbRRX3S/strains/data/desc/2')
  //   .then(res => res)
  //   .then(data => console.log(data.json()));
  return (
    <div className="description">
      <p>{desc}</p>
    </div>

  );
};

Description.propTypes = {
  strainID: PropTypes.string.isRequired,
};

export default Description;
