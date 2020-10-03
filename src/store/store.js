import { createStore } from 'redux';
import reducer from './reducers/reducer';
import { fetchStrains } from '../fetch/fetch';

const storage = localStorage.getItem('theBudIndexStore')
  ? JSON.parse(localStorage.getItem('theBudIndexStore'))
  : fetchStrains().then(strains => {
    localStorage.setItem('theBudIndexStore', JSON.stringify(strains));
    return strains;
  });

const store = createStore(reducer, storage);

export default store;
