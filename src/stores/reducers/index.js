import { combineReducers } from 'redux';

import {
  TURN_LOADING,
  ON_APP_LOADING_FINISH,
} from '../actions';

import usersReducer from './users';

const initialState = {
  loading: false,
  isAppReady: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TURN_LOADING: {
      return { ...state, loading: action.payload };
    }
    case ON_APP_LOADING_FINISH: {
      return { ...state, isAppReady: true };
    }
    default:
      return state;
  }
};

const reducers = {
  rootReducer,
  usersReducer,
};

const allReducers = combineReducers(reducers);

export default allReducers;
