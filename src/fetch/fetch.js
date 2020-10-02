const baseURL = 'http://strainapi.evanbusse.com/dbRRX3S';

const fetchStrains = async () => {
  const strains = await fetch(`${baseURL}/strains/search/all`).then(res => res.json());
  return strains;
};

const fetchEffects = async () => {
  const effects = await fetch(`${baseURL}/searchdata/effects`).then(res => res.json());
  return effects;
};
const fetchFlavours = async () => {
  const flavors = await fetch(`${baseURL}/searchdata/flavors`).then(res => res.json());
  return flavors;
};

const fetchProps = async () => Promise.all([fetchEffects(), fetchFlavours(), fetchStrains()]);

const fetchDesc = async id => {
  const desc = await fetch(`http://strainapi.evanbusse.com/dbRRX3S/strains/data/desc/${id}`);
  return desc;
};

export {
  fetchProps, fetchEffects, fetchStrains, fetchFlavours, fetchDesc,
};
