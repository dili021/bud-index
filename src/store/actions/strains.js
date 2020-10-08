const baseURL = 'https://strainapi.evanbusse.com/dbRRX3S';

const FETCH_STRAINS = 'FETCH_STRAINS';
const fetchStrains = () => dispatch => fetch(`${baseURL}/strains/search/all`)
  .then(res => res.json())
  .then(data => {
    dispatch({
      type: FETCH_STRAINS,
      payload: data,
    });
  });

export {
  fetchStrains, FETCH_STRAINS,
};
