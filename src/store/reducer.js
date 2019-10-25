// https://redux.js.org/api/combinereducers

import { combineReducers } from 'redux';
import appReducer from 'src/store/reducers/appReducer';
import userReducer from 'src/store/reducers/userReducer';
import listReducer from 'src/store/reducers/listReducer';


const reducers = {
  appReducer,
  userReducer,
  listReducer,
};

export default combineReducers(reducers);
