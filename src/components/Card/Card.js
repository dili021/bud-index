import React from 'react';
import './card.scss';
import { v4 as uuid } from 'uuid';
import { Link } from '@reach/router';
// eslint-disable-next-line react/prop-types
const Card = ({ strain }) => {
  const [name, {
    race, flavors, effects, id,
  }] = strain;
  return (
    <div className="card">
      <Link to={`/${id}/desc`}>
        <h1>{name}</h1>
      </Link>
      <div>
        <h2>Race: </h2>
        <span>{race}</span>
        <div className="props">
          <ul>
            <h2>Flavors: </h2>
            {flavors.map(flav => (
              <li key={uuid()}>
                {flav}
              </li>
            ))}
          </ul>
          <ul>
            <h2>Effects: </h2>
            {/* {effects.map(flav => (
              <li key={uuid()}>
                {flav}
              </li>
            ))} */}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Card;
