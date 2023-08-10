// Get Action name constatnt
export const GET_USER_ACTION = 'GET_USER_ACTION';
export const GET_USER_SUCCESS = `${GET_USER_ACTION}_SUCCESS`;
export const GET_USER_FAILURE = `${GET_USER_ACTION}_FAILURE`;

// Create Action name constant
export const CREATE_USER_ACTION = 'CREATE_USER_ACTION';
export const CREATE_USER_SUCCESS = `${CREATE_USER_ACTION}_SUCCESS`;
export const CREATE_USER_FAILURE = `${CREATE_USER_ACTION}_FAILURE`;

// update Action name constant
export const UPDATE_USER_ACTION = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = `${UPDATE_USER_ACTION}_SUCCESS`;
export const UPDATE_USER_FAILURE = `${UPDATE_USER_ACTION}_FAILURE`;
export const RESET_UPDATE_USER_ERROR = `RESET_UPDATE_USER_ERROR`;


// update Action name constant
export const DELETE_USER_ACTION = 'DELETE_USER';
export const DELETE_USER_SUCCESS = `${DELETE_USER_ACTION}_SUCCESS`;
export const DELETE_USER_FAILURE = `${DELETE_USER_ACTION}_FAILURE`;

// action creators for method "PRODUCT
export const getUserAction = () => ({
  type: GET_USER_ACTION,
});

export const getUserSuccessAction = (payload) => ({
  type: GET_USER_SUCCESS,
  payload: payload,
});

export const getUserFailureAction = (payload) => ({
  type: GET_USER_FAILURE,
  payload: payload,
});

// Create action creators for method "POST"
export const createUserAction = (user) => {
  return {
    type: CREATE_USER_ACTION,
    payload: user,
  };
};

export const createUserSuccess = (user) => {
  return {
    type: CREATE_USER_SUCCESS,
    payload: user,
  };
};

export const createUserFailure = (error) => {
  return {
    type: CREATE_USER_FAILURE,
    payload: error,
  };
};

// Update action creators for method "PUT"
export const updateUser = (user) => {
  return {
    type: UPDATE_USER_ACTION,
    payload: user,
  };
};

export const updateUserSuccess = (user) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: user,
  };
};

export const updateUserFailure = (error) => {
  return {
    type: UPDATE_USER_FAILURE,
    payload: error,
  };
};

export const resetUpdateUserError = () => ({
  type: RESET_UPDATE_USER_ERROR,
});

// delete action creators for method "DELETE"
export const deleteUser = (UserId) => {
  return {
    type: DELETE_USER_ACTION,
    payload: UserId,
  };
};

export const deleteUserSuccess = (user) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: user,
  };
};

export const deleteUserFailure = (error) => {
  return {
    type: DELETE_USER_FAILURE,
    payload: error,
  };
};