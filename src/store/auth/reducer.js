import { localStorageUtils } from "../../utils";
import {
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
} from "./action";

export const INITIAL_STATE = {
  token: localStorageUtils.getItem(localStorageUtils.TOKEN_KEY),
  verified: false,
  user: localStorageUtils.getItem(localStorageUtils.USER_KEY) || {},
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SIGN_UP_SUCCESS:
      return { ...state, ...{ ...payload, verified: true } };
    case SIGN_UP_FAILURE:
      return { ...INITIAL_STATE, verified: false };
    case LOG_IN_SUCCESS:
      return { ...state, ...{ ...payload, verified: true } };
    case LOG_IN_FAILURE:
      return { ...INITIAL_STATE, verified: false };
    case LOG_OUT_SUCCESS:
      return { ...INITIAL_STATE, verified: false };
    default:
      return state;
  }
};

export default reducer;
