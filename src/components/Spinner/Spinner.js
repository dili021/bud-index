import React from 'react';
import './spinner.scss';
import leaf from '../../assets/960px-Cannabis_leaf.png';

export default function Spinner() {
  return (
    <div className="spinner-div">
      <img className="spinner" src={leaf} alt="weed leaf" />
    </div>
  );
}
