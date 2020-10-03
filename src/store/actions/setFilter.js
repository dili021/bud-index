const SET_FILTER = 'SET_FILTER';

const setFilter = filter => ({
  type: SET_FILTER,
  payload: filter,
});

export { setFilter, SET_FILTER };
