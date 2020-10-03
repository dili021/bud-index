import { setFilter, SET_FILTER } from '../actions/setFilter';

const reducer = (state = {}, { type, payload }) => {
  if (type === SET_FILTER) {
    return state.filter(item => item.prop === payload);
  }
  return state;
};

export default reducer;
