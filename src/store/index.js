import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import reducer from '../reducers';
import { loadState, saveState } from '../localStorage';

const persistedState = loadState();

const store = createStore(reducer, persistedState);
store.subscribe(throttle(() => {
  saveState({
    recipes: store.getState().recipes,
  });
}), 1000);

export default store;
