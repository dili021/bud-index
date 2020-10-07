const ADD_FILTER = 'ADD_FILTER';
const CLEAR_FILTER = 'CLEAR_FILTER';

const addFilter = filter => ({
  type: ADD_FILTER,
  payload: filter,
});

const clearFilter = () => ({
  type: CLEAR_FILTER,
});

export {
  addFilter, clearFilter, CLEAR_FILTER, ADD_FILTER,
};
