import {
  call,
  takeLatest,
  put,
} from 'redux-saga/effects';
import getCashFlowDataApi from '../../services/users';
import { printError } from '../../utils';

import * as usersActions from '../actions/users';

function* getUserData({ payload: { userName, callback } }) {
  try {
    yield put(usersActions.loadingUserData(true));
    const data = yield call(getCashFlowDataApi, userName);
    yield put(usersActions.setUserInfo(data));
    yield call(callback);
  } catch (error) {
    yield call(printError, 'Error. Try again later');
    yield put(usersActions.setUserInfo(null));
  } finally {
    yield put(usersActions.loadingUserData(false));
  }
}

export default function* usersSagas() {
  yield takeLatest(usersActions.GET_USER_INFO_BY_NAME, getUserData);
}
