/* eslint-disable max-len */
import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import Card from './Card/Card';
import './list.scss';

const List = ({ storage, filter }) => {
  let strains = Object.entries(storage);

  strains = filter.length
    ? Object.entries(storage).filter(([_, { effects, flavors }]) => filter.some(val => Object.values(effects).flat().includes(val)
    || Object.values(flavors).flat().includes(val)))
    : Object.entries(storage);

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
        {strains.map(strain => <Card key={uuid()} strain={strain} />)}
      </div>
    </div>
  );
};

List.propTypes = {
  storage: PropTypes.instanceOf(Object).isRequired,
  filter: PropTypes.instanceOf(Array).isRequired,
};

const mapState = ({ storage, filter }) => ({ storage, filter });

export default connect(mapState)(List);
