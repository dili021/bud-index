const baseURL = 'http://strainapi.evanbusse.com/dbRRX3S';

const fetchStrains = async () => {
  const response = await fetch(`${baseURL}/strains/search/all`);
  const strains = await response.json();
  return strains;
};
const fetchEffects = async () => {
  const res = await fetch(`${baseURL}/searchdata/effects`);
  const effects = await res.json();
  return effects;
};

const fetchFlavours = async () => {
  const flavors = await fetch(`${baseURL}/searchdata/flavors`).then(res => res.json());
  return flavors;
};

const fetchDesc = async id => {
  const desc = await fetch(`${baseURL}/strains/data/desc/${id}`);
  return desc;
};

export {
  fetchEffects, fetchStrains, fetchFlavours, fetchDesc,
};
