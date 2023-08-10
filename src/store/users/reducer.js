import {
  CREATE_USER_FAILURE,
  CREATE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  DELETE_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
  RESET_UPDATE_USER_ERROR,
  UPDATE_USER_FAILURE,
  UPDATE_USER_SUCCESS,
} from './action';

export const INITIAL_STATE = {
  limit: 0,
  users: [],
  skip: 0,
  total: 0,
  error: '',
  createUserError: null,
  updateUserError: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USER_SUCCESS:
      // return { ...state, ...payload, error: '' };
      return {
        ...state,
        ...payload,
        users: [...state.users, ...payload.users],
        error: '',
      };
    case GET_USER_FAILURE:
      return { ...state, ...payload };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
        // error: null,
        createUserError: false,
      };
    case CREATE_USER_FAILURE:
      return {
        ...state,
        createUserError: action.payload,
      };

    case UPDATE_USER_SUCCESS:
      const updatedUser = action.payload;

      const updatedUsers = state.users.map((user) => {
        if (user.id === updatedUser.id) {
          return updatedUser;
        }
        return user;
      });

      return {
        ...state,
        users: updatedUsers,
        updateUserError: false,
        error: null,
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        updateUserError: action.payload,
      };

    case RESET_UPDATE_USER_ERROR:
      return { ...state, updateUserError: null };

    case DELETE_USER_SUCCESS:
      const deleteduserId = action.payload.id;
      console.log('deleteduserId', deleteduserId);
      const deleteUpdatedusers = state.users.filter(
        (user) => user.id !== deleteduserId
      );
      return {
        ...state,
        users: deleteUpdatedusers,
        error: null,
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
