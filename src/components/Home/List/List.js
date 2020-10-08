/* eslint-disable max-len */
import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import Card from './Card/Card';
import './list.scss';
import Spinner from '../../Spinner/Spinner';

const List = state => {
  let { strains } = state;
  const { filter } = state;
  strains = Object.entries(strains);
  if (filter.length) {
    strains = strains.filter(([_, { effects, flavors }]) => filter.some(val => Object.values(effects).flat().includes(val)
    || Object.values(flavors).flat().includes(val)));
  }
  return (
    <div>
      <div className="querry-info">
        <span className="querry">
          {filter.map(val => (
            <span className="querry-param" key={val}>
              {val}
            </span>
          ))}
        </span>
        <span className="item-count">
          {strains.length}
          {' '}
          Strains
          {' '}
        </span>

      </div>
      <div className="results">
        {strains.length ? strains.map(strain => <Card key={uuid()} strain={strain} />) : <Spinner />}
      </div>
    </div>
  );
};

const mapState = state => (state);

export default connect(mapState)(List);
