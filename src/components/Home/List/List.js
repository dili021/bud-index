import React, { useState, useEffect } from 'react';
import Card from './Card/Card';
// import { fetchStrains } from '../../../fetch/fetch';
import './list.scss';

const placeholder = {
  Afpak: {
    id: 1,
    race: 'hybrid',
    flavors: [
      'Earthy',
      'Chemical',
      'Pine',
    ],
    effects: {
      positive: [
        'Relaxed',
        'Hungry',
        'Happy',
        'Sleepy',
      ],
      negative: [
        'Dizzy',
      ],
      medical: [
        'Depression',
        'Insomnia',
        'Pain',
        'Stress',
        'Lack of Appetite',
      ],
    },
  },
  African: {
    id: 2,
    race: 'sativa',
    flavors: [
      'Spicy/Herbal',
      'Pungent',
      'Earthy',
    ],
    effects: {
      positive: [
        'Euphoric',
        'Happy',
        'Creative',
        'Energetic',
        'Talkative',
      ],
      negative: [
        'Dry Mouth',
      ],
      medical: [
        'Depression',
        'Pain',
        'Stress',
        'Lack of Appetite',
        'Nausea',
        'Headache',
      ],
    },
  },
  'Afternoon Delight': {
    id: 3,
    race: 'hybrid',
    flavors: [
      'Pepper',
      'Flowery',
      'Pine',
    ],
    effects: {
      positive: [
        'Relaxed',
        'Hungry',
        'Euphoric',
        'Uplifted',
        'Tingly',
      ],
      negative: [
        'Dizzy',
        'Dry Mouth',
        'Paranoid',
      ],
      medical: [
        'Depression',
        'Insomnia',
        'Pain',
        'Stress',
        'Cramps',
        'Headache',
      ],
    },
  },
  Afwreck: {
    id: 4,
    race: 'hybrid',
    flavors: [
      'Pine',
      'Earthy',
      'Flowery',
    ],
    effects: {
      positive: [
        'Relaxed',
        'Happy',
        'Creative',
        'Uplifted',
        'Sleepy',
      ],
      negative: [
        'Dizzy',
        'Dry Mouth',
        'Paranoid',
        'Dry Eyes',
      ],
      medical: [
        'Pain',
        'Stress',
        'Headache',
        'Fatigue',
        'Headaches',
        'Muscle Spasms',
      ],
    },
  },
};

const List = () => {
  const [strains, setStrains] = useState([]);

  useEffect(() => {
    setStrains(placeholder);
  //   (async () => {
  // await fetchProps().then(([effects, flavors, strains]) => {
  // setEffects(effects);
  // setflavors(flavors);
  // setStrains(strains);
  // });
  //   })();
  }, []);
  return (
    <div className="results">
      {Object.entries(strains).map(item => <Card key={item[1].id} strain={item} />)}
    </div>
  );
};

export default List;
