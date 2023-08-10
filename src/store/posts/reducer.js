import {
  CREATE_POST_FAILURE,
  CREATE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  DELETE_POST_SUCCESS,
  GET_POST_FAILURE,
  GET_POST_SUCCESS,
  RESET_UPDATE_POST_ERROR,
  UPDATE_POST_FAILURE,
  UPDATE_POST_SUCCESS,
} from './action';

export const INITIAL_STATE = {
  limit: 0,
  posts: [],
  skip: 0,
  total: 0,
  error: '',
  createPostError: null, // true, false or null
  updatePostError: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  // console.log('reducer', { type, payload });
  switch (type) {
    case GET_POST_SUCCESS:
      // return { ...state, ...payload, error: '' };
      return {
        ...state,
        ...payload,
        posts: [...state.posts, ...payload.posts],
        error: '',
      };
    case GET_POST_FAILURE:
      return { ...state, error: payload.error };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        // error: null,
        createPostError: false,
      };
    case CREATE_POST_FAILURE:
      return {
        ...state,
        createPostError: action.payload,
      };
    case UPDATE_POST_SUCCESS:
      const updatedPost = action.payload;

      const updatedPosts = state.posts.map((post) => {
        if (post.id === updatedPost.id) {
          return updatedPost;
        }
        return post;
      });

      return {
        ...state,
        posts: updatedPosts,
        updatePostError: false,
        // loading: false,
        error: null,
      };
    case UPDATE_POST_FAILURE:
      return {
        ...state,
        // loading: false,
        updatePostError: action.payload,
      };
    case RESET_UPDATE_POST_ERROR:
      return { ...state, updatePostError: null };
    case DELETE_POST_SUCCESS:
      const deletedPostId = action.payload.id;
      console.log('deletedPostId', deletedPostId);
      const deleteUpdatedPosts = state.posts.filter(
        (post) => post.id !== deletedPostId
      );
      return {
        ...state,
        posts: deleteUpdatedPosts,
        // loading: false,
        error: null,
      };
    case DELETE_POST_FAILURE:
      return {
        ...state,
        // loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
