import {
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_SUCCESS,
  RESET_UPDATE_PRODUCT_ERROR,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_SUCCESS,
} from './action';

export const INITIAL_STATE = {
  limit: 0,
  products: [],
  skip: 0,
  total: 0,
  error: '',
  createProductError: null,
  updateProductError: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCT_SUCCESS:
      // return { ...state, ...payload, error: '' };
      return {
        ...state,
        ...payload,
        products: [...state.products, ...payload.products],
        error: '',
      };
    case GET_PRODUCT_FAILURE:
      return { ...state, ...payload };
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
        // error: null,
        createProductError: false,
      };
    case CREATE_PRODUCT_FAILURE:
      return {
        ...state,
        createProductError: action.payload,
      };

    case UPDATE_PRODUCT_SUCCESS:
      const updatedProduct = action.payload;

      const updatedProducts = state.products.map((product) => {
        if (product.id === updatedProduct.id) {
          return updatedProduct;
        }
        return product;
      });

      return {
        ...state,
        products: updatedProducts,
        updateProductError: false,
        error: null,
      };
    case UPDATE_PRODUCT_FAILURE:
      return {
        ...state,
        updateProductError: action.payload,
      };
    case RESET_UPDATE_PRODUCT_ERROR:
      return { ...state, updateProductError: null };
    case DELETE_PRODUCT_SUCCESS:
      const deletedProductId = action.payload.id;
      console.log('deletedProductId', deletedProductId);
      const deleteUpdatedProducts = state.products.filter(
        (product) => product.id !== deletedProductId
      );
      return {
        ...state,
        products: deleteUpdatedProducts,
        error: null,
      };
    case DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
