import { call, put, takeLatest } from 'redux-saga/effects';
import { loginApi, signupApi } from '../../api';
import {
  LOG_IN_ACTION,
  LOG_OUT_ACTION,
  SIGN_UP_ACTION,
  logInFailureAction,
  logInSuccessAction,
  logOutSuccessAction,
  signUpFailureAction,
  signUpSuccessAction,
} from './action';
import { localStorageUtils } from '../../utils';

export function* logInSaga(action) {
  // console.log("action", action);
  const { payload } = action; // const payload = action.payload

  try {
    const response = yield call(loginApi, payload);
    // console.log("login saga response", response);
    const { id, email, gender, firstName, lastName, image, token, message } =
      response;
    if (message) {
      yield put(logInFailureAction(message));
    } else {
      // set data to user
      const user = {
        id,
        email,
        gender,
        image,
        firstName,
        lastName,
        username: payload.username,
      };

      // set data to local storage
      localStorageUtils.setItem(localStorageUtils.TOKEN_KEY, token);
      localStorageUtils.setItem(localStorageUtils.USER_KEY, user);

      // set Data to redux
      yield put(
        logInSuccessAction({
          token,
          user,
        })
      );
    }
  } catch (error) {
    // fire an action from saga
    yield put(logInFailureAction(error));
  }
}

export function* signUpSaga(action) {
  const { payload } = action;
  // console.log("action", action);
  // console.log("payload", payload);

  try {
    const response = yield call(signupApi);
    // console.log("signUpApi response", response);
    const { id, image, token, message } = response;

    if (message) {
      yield put(signUpFailureAction(response.message));
    } else {
      // Set Data to User
      const user = {
        id,
        image,
        email: payload.email,
        gender: payload.gender,
        username: payload.username,
        firstName: payload.firstName,
        lastName: payload.lastName,
      };

      // set data to local storage
      localStorageUtils.setItem(localStorageUtils.TOKEN_KEY, token);
      localStorageUtils.setItem(localStorageUtils.USER_KEY, user);

      // set data to redux
      yield put(
        signUpSuccessAction({
          token,
          user,
        })
      );
    }
  } catch (error) {
    yield put(signUpFailureAction(error));
  }
}

export function* logOutSaga() {
  // clear data from local storage
  localStorageUtils.clearAll();
  // clear data from redux
  yield put(logOutSuccessAction());
}

export default [
  takeLatest(LOG_IN_ACTION, logInSaga),
  takeLatest(SIGN_UP_ACTION, signUpSaga),
  takeLatest(LOG_OUT_ACTION, logOutSaga),
];
