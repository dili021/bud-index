import 'regenerator-runtime/runtime';

const baseURL = 'https://strainapi.evanbusse.com/dbRRX3S';

const fetchEffects = async () => {
  try {
    const res = await fetch(`${baseURL}/searchdata/effects`);
    const effects = await res.json();
    return effects;
  } catch (error) {
    return error;
  }
};

const fetchFlavours = async () => {
  try {
    const flavors = await fetch(`${baseURL}/searchdata/flavors`).then(res => res.json());
    return flavors;
  } catch (error) {
    return error;
  }
};

const fetchDesc = async id => {
  try {
    const desc = await fetch(`${baseURL}/strains/data/desc/${id}`);
    return desc;
  } catch (error) {
    return error;
  }
};

export {
  fetchEffects, fetchFlavours, fetchDesc,
};
