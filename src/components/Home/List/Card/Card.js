/* eslint-disable no-nested-ternary */
import React from 'react';
import './card.scss';
import { Link } from '@reach/router';
// eslint-disable-next-line react/prop-types
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
          Race:
          {race}
        </p>
        <span>{(race === 'sativa') ? 1 : (race === 'indica') ? 2 : 3}</span>
      </div>
    </div>
  );
};
export default Card;
