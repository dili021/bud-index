import React, { useState, useEffect } from 'react';
import Card from './Card/Card';
import './list.scss';
import store from '../../../store/store';

const List = () => {
  // eslint-disable-next-line no-unused-vars
  const [strains, setStrains] = useState(store.getState());

  useEffect(() => {
    setStrains(strains);
  }, [strains]);

  // console.log(strains);
  const filteredStrains = Object.entries(strains).filter(([_, { effects, flavors }]) => Object.values(effects).flat().includes(''));
  // console.log(
  //   Object.values(Object.values(Object.entries(strains)[0][1])[3]).flat(),
  // );
  return (
    <div className="results">
      {/* {filteredStrains.map(item => <Card key={item[1].id} strain={item} />)} */}
      {Object.entries(strains).map(item => <Card key={item[1].id} strain={item} />)}
    </div>
  );
};

export default List;
