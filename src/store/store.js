import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/reducer';

const initialStore = { strains: {}, filter: [] };
const store = createStore(
  reducer, initialStore, composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
