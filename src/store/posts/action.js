// Get Action name constant
export const GET_POST_ACTION = 'GET_POST_ACTION';
export const GET_POST_SUCCESS = `${GET_POST_ACTION}_SUCCESS`;
export const GET_POST_FAILURE = `${GET_POST_ACTION}_FAILURE`;

// Create Action name constant
export const CREATE_POST_ACTION = 'CREATE_POST';
export const CREATE_POST_SUCCESS = `${CREATE_POST_ACTION}_SUCCESS`;
export const CREATE_POST_FAILURE = `${CREATE_POST_ACTION}_FAILURE`;

// update Action name constant
export const UPDATE_POST_ACTION = 'UPDATE_POST';
export const UPDATE_POST_SUCCESS = `${UPDATE_POST_ACTION}_SUCCESS`;
export const UPDATE_POST_FAILURE = `${UPDATE_POST_ACTION}_FAILURE`;
export const RESET_UPDATE_POST_ERROR = `RESET_UPDATE_POST_ERROR`;

// update Action name constant
export const DELETE_POST_ACTION = 'DELETE_POST';
export const DELETE_POST_SUCCESS = `${DELETE_POST_ACTION}_SUCCESS`;
export const DELETE_POST_FAILURE = `${DELETE_POST_ACTION}_FAILURE`;

// action creators for method "GET"
export const getPostAction = () => ({
  type: GET_POST_ACTION,
});

export const getPostSuccessAction = (payload) => ({
  type: GET_POST_SUCCESS,
  payload: payload,
});

export const getPostFailureAction = (payload) => ({
  type: GET_POST_FAILURE,
  payload: payload,
});

// action creators for method "POST"
export const createPostAction = (post) => {
  return {
    type: CREATE_POST_ACTION,
    payload: post,
  };
};

export const createPostSuccess = (post) => {
  return {
    type: CREATE_POST_SUCCESS,
    payload: post,
  };
};

export const createPostFailure = (error) => {
  return {
    type: CREATE_POST_FAILURE,
    payload: error,
  };
};

// action creators for method "PUT"
export const updatePostAction = (post) => {
  return {
    type: UPDATE_POST_ACTION,
    payload: post,
  };
};

export const updatePostSuccess = (post) => {
  return {
    type: UPDATE_POST_SUCCESS,
    payload: post,
  };
};

export const updatePostFailure = (error) => {
  return {
    type: UPDATE_POST_FAILURE,
    payload: error,
  };
};

export const resetUpdatePostError = () => ({
  type: RESET_UPDATE_POST_ERROR,
});

// action creators for method "DELETE"
export const deletePost = (postId) => {
  return {
    type: DELETE_POST_ACTION,
    payload: postId,
  };
};

export const deletePostSuccess = (post) => {
  return {
    type: DELETE_POST_SUCCESS,
    payload: post,
  };
};

export const deletePostFailure = (error) => {
  return {
    type: DELETE_POST_FAILURE,
    payload: error,
  };
};
