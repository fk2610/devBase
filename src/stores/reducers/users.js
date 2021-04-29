import { GIT_HUB_USERS } from '../../utils/Constants';
import {
  LOADING_USER_DATA,
  SET_USER_INFO,
} from '../actions/users';

const initialState = {
  usersList: GIT_HUB_USERS,
  userData: null,
  isLoadingUserData: true,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO: {
      return {
        ...state,
        userData: action.payload,
      };
    }
    case LOADING_USER_DATA: {
      return { ...state, isLoadingUserData: action.payload };
    }
    default:
      return state;
  }
};

export default usersReducer;
