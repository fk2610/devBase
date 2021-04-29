export const GET_USER_INFO_BY_NAME = 'GET_USER_BY_NAME';
export const SET_USER_INFO = 'SET_USER_INFO';
export const LOADING_USER_DATA = 'LOADING_USER_DATA';

export const getUserInfo = (userName, callback) => ({
  type: GET_USER_INFO_BY_NAME,
  payload: { userName, callback },
});

export const setUserInfo = (payload) => ({
  type: SET_USER_INFO,
  payload,
});

export const loadingUserData = (payload) => ({
  type: LOADING_USER_DATA,
  payload,
});
