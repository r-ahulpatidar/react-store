import { all } from 'redux-saga/effects';
import authSaga from './auth/sagas';
import postSaga from './posts/sagas';
import productSaga from './products/sagas';
import userSaga from './users/sagas';

export default function* rootSaga() {
  yield all([...authSaga, ...postSaga, ...productSaga, ...userSaga]);
}
