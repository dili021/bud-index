import { ADD_FILTER, CLEAR_FILTER } from '../actions/filter';

const reducer = ({ storage, filter }, { type, payload }) => {
  if (type === ADD_FILTER) {
    return { storage, filter: [...filter, payload] };
  }
  if (type === CLEAR_FILTER) {
    return { storage, filter: [] };
  }
  return { storage, filter };
};

export default reducer;
