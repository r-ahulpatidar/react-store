import { put, takeLatest, call, takeEvery } from 'redux-saga/effects';
import { createPostApi, deletePostApi, getPostApi, updatePostApi } from '../../api';
import {
  CREATE_POST_ACTION,
  DELETE_POST_ACTION,
  GET_POST_ACTION,
  UPDATE_POST_ACTION,
  createPostFailure,
  createPostSuccess,
  deletePostFailure,
  deletePostSuccess,
  getPostFailureAction,
  getPostSuccessAction,
  updatePostFailure,
  updatePostSuccess,
} from './action';

export function* getPostSaga() {
  try {
    //api call from saga
    const response = yield call(getPostApi);
    // console.log('getPostSaga response', response);

    yield put(getPostSuccessAction(response));
  } catch (error) {
    yield put(getPostFailureAction({ error: error.message }));
  }
}

export function* createPostSaga(action) {
  console.log('action create', action);
  try {
    const response = yield call(createPostApi, action.payload);
    console.log('create response', response);
    yield put(createPostSuccess(response));
  } catch (error) {
    yield put(createPostFailure(error.message));
  }
}

export function* updatePostSaga(action) {
  console.log('action create', action);
  // const { post } = action.payload;
  // console.log("postId, post", { postId, post });
  try {
    const response = yield call(updatePostApi, action.payload);
    console.log('update response', response);

    yield put(updatePostSuccess(response));
  } catch (error) {
    yield put(updatePostFailure(error));
  }
}

export function* deletePostSaga(action) {
  // console.log('deleteId', action.payload);
  try {
    const response = yield call(deletePostApi, action.payload);
    console.log('delete pot response', response);

    yield put(deletePostSuccess(response));
  } catch(error) {
    yield put(deletePostFailure(error));
  }
}

export default [
  takeLatest(GET_POST_ACTION, getPostSaga),
  takeEvery(CREATE_POST_ACTION, createPostSaga),
  takeLatest(UPDATE_POST_ACTION, updatePostSaga),
  takeLatest(DELETE_POST_ACTION, deletePostSaga),
];
