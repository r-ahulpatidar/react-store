import { call, put, takeLatest } from 'redux-saga/effects';
import {
  CREATE_PRODUCT_ACTION,
  DELETE_PRODUCT_ACTION,
  GET_PRODUCT_ACTION,
  UPDATE_PRODUCT_ACTION,
  createProductFailure,
  createProductSuccess,
  deleteProductFailure,
  deleteProductSuccess,
  getProductFailureAction,
  getProductSuccessAction,
  updateProductFailure,
  updateProductSuccess,
} from './action';
import { createProductApi, deleteProductApi, getProductApi, updateProductApi } from '../../api';

export function* getProductSaga() {
  try {
    const response = yield call(getProductApi);
    console.log('product response', response);

    yield put(getProductSuccessAction(response));
  } catch (error) {
    yield put(getProductFailureAction(error));
  }
}

export function* createProductSaga(action) {
  // console.log('action create', action);
  try {
    const response = yield call(createProductApi, action.payload);
    console.log('create response', response);
    yield put(createProductSuccess(response));
  } catch (error) {
    yield put(createProductFailure(error));
  }
}

export function* updateProductSaga(action) {
    console.log('action create', action);
    // const { post } = action.payload;
    // console.log("postId, post", { postId, post });
    try {
      const response = yield call(updateProductApi, action.payload);
      console.log('update response', response);
  
      yield put(updateProductSuccess(response));
    } catch (error) {
      yield put(updateProductFailure(error));
    }
  }

export function* deleteProductSaga(action) {
  // console.log('deleteId', action.payload);
  try {
    const response = yield call(deleteProductApi, action.payload);
    console.log('delete pot response', response);

    yield put(deleteProductSuccess(response));
  } catch (error) {
    yield put(deleteProductFailure(error));
  }
}

export default [
  takeLatest(GET_PRODUCT_ACTION, getProductSaga),
  takeLatest(CREATE_PRODUCT_ACTION, createProductSaga),
  takeLatest(UPDATE_PRODUCT_ACTION, updateProductSaga),
  takeLatest(DELETE_PRODUCT_ACTION, deleteProductSaga),
];
