import { call, put, takeLatest } from 'redux-saga/effects';
import {
  CREATE_USER_ACTION,
  DELETE_USER_ACTION,
  GET_USER_ACTION,
  UPDATE_USER_ACTION,
  createUserFailure,
  createUserSuccess,
  deleteUserFailure,
  deleteUserSuccess,
  getUserFailureAction,
  getUserSuccessAction,
  updateUserFailure,
  updateUserSuccess,
} from './action';
import { createUserApi, deleteUserApi, getUserApi, updateUserApi } from '../../api';

export function* getUserSaga() {
  try {
    const response = yield call(getUserApi);
    console.log('user response', response);

    yield put(getUserSuccessAction(response));
  } catch (error) {
    yield put(getUserFailureAction(error));
  }
}

export function* createUserSaga(action) {
  console.log('action create', action);
  try {
    const response = yield call(createUserApi, action.payload);
    console.log('create response', response);
    yield put(createUserSuccess(response));
  } catch (error) {
    yield put(createUserFailure(error));
  }
}

export function* updateUserSaga(action) {
  console.log('action create', action);
  // const { post } = action.payload;
  // console.log("postId, post", { postId, post });
  try {
    const response = yield call(updateUserApi, action.payload);
    console.log('update response', response);

    yield put(updateUserSuccess(response));
  } catch (error) {
    yield put(updateUserFailure(error));
  }
}

export function* deleteUserSaga(action) {
  // console.log('deleteId', action.payload);
  try {
    const response = yield call(deleteUserApi, action.payload);
    console.log('delete pot response', response);

    yield put(deleteUserSuccess(response));
  } catch (error) {
    yield put(deleteUserFailure(error));
  }
}

export default [
  takeLatest(GET_USER_ACTION, getUserSaga),
  takeLatest(CREATE_USER_ACTION, createUserSaga),
  takeLatest(UPDATE_USER_ACTION, updateUserSaga),
  takeLatest(DELETE_USER_ACTION, deleteUserSaga),
];
