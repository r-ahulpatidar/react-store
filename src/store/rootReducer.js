import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import postReducer from './posts/reducer';
import productReducer from './products/reducer';
import userReducer from './users/reducer';

export default combineReducers({
  auth: authReducer,
  post: postReducer,
  product: productReducer,
  user: userReducer,
});
