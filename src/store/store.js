import { createStore } from 'redux';
import reducer from './reducers/reducer';
import { fetchStrains } from '../fetch/fetch';

const storage = localStorage.getItem('theBudIndexStore')
  ? JSON.parse(localStorage.getItem('theBudIndexStore'))
  : fetchStrains().then(strains => {
    localStorage.setItem('theBudIndexStore', JSON.stringify(strains));
    return strains;
  });

const initialStore = { storage, filter: [] };

const store = createStore(reducer, initialStore);

export default store;
