import { ADD_FILTER, CLEAR_FILTER } from '../actions/filter';
import { FETCH_STRAINS } from '../actions/strains';

const reducer = ({ strains, filter }, { type, payload }) => {
  if (type === ADD_FILTER) {
    return { strains, filter: [...filter, payload] };
  }
  if (type === CLEAR_FILTER) {
    return { strains, filter: [] };
  }
  if (type === FETCH_STRAINS) {
    return { strains: payload, filter };
  }

  return { strains, filter };
};

export default reducer;
