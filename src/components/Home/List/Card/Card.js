/* eslint-disable no-nested-ternary */
import React from 'react';
import './card.scss';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

const Card = ({ strain }) => {
  const [name, {
    race, id,
  }] = strain;
  return (
    <div className="card">
      <Link state={{ strain }} to={`/${id}/description`}>
        <h1>{name}</h1>
      </Link>
      <div>
        <p>
          {race}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  strain: PropTypes.instanceOf(Object).isRequired,
};

export default Card;
