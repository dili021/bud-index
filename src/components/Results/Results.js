import React from 'react';

const strains = [1, 2, 3, 4, 5];
const Results = () => (
  <div className="results">
    {strains.map(strain => <Card strain={strain} />)}
  </div>
);
