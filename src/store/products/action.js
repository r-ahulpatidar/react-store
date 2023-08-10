// Get Action name constatnt
export const GET_PRODUCT_ACTION = 'GET_PRODUCT_ACTION';
export const GET_PRODUCT_SUCCESS = `${GET_PRODUCT_ACTION}_SUCCESS`;
export const GET_PRODUCT_FAILURE = `${GET_PRODUCT_ACTION}_FAILURE`;

// Create Action name constant
export const CREATE_PRODUCT_ACTION = 'CREATE_PRODUCT_ACTION';
export const CREATE_PRODUCT_SUCCESS = `${CREATE_PRODUCT_ACTION}_SUCCESS`;
export const CREATE_PRODUCT_FAILURE = `${CREATE_PRODUCT_ACTION}_FAILURE`;

// update Action name constant
export const UPDATE_PRODUCT_ACTION = 'UPDATE_PRODUCT';
export const UPDATE_PRODUCT_SUCCESS = `${UPDATE_PRODUCT_ACTION}_SUCCESS`;
export const UPDATE_PRODUCT_FAILURE = `${UPDATE_PRODUCT_ACTION}_FAILURE`;
export const RESET_UPDATE_PRODUCT_ERROR = `RESET_UPDATE_PRODUCT_ERROR`;

// update Action name constant
export const DELETE_PRODUCT_ACTION = 'DELETE_PRODUCT';
export const DELETE_PRODUCT_SUCCESS = `${DELETE_PRODUCT_ACTION}_SUCCESS`;
export const DELETE_PRODUCT_FAILURE = `${DELETE_PRODUCT_ACTION}_FAILURE`;

// Get action creators for method "PRODUCT
export const getProductAction = () => ({
  type: GET_PRODUCT_ACTION,
});

export const getProductSuccessAction = (payload) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: payload,
});

export const getProductFailureAction = (payload) => ({
  type: GET_PRODUCT_FAILURE,
  payload: payload,
});

// Create action creators for method "POST"
export const createProductAction = (product) => {
  return {
    type: CREATE_PRODUCT_ACTION,
    payload: product,
  };
};

export const createProductSuccess = (product) => {
  return {
    type: CREATE_PRODUCT_SUCCESS,
    payload: product,
  };
};

export const createProductFailure = (error) => {
  return {
    type: CREATE_PRODUCT_FAILURE,
    payload: error,
  };
};

// Update action creators for method "PUT"
export const updateProduct = (product) => {
  return {
    type: UPDATE_PRODUCT_ACTION,
    payload: product,
  };
};

export const updateProductSuccess = (product) => {
  return {
    type: UPDATE_PRODUCT_SUCCESS,
    payload: product,
  };
};

export const updateProductFailure = (error) => {
  return {
    type: UPDATE_PRODUCT_FAILURE,
    payload: error,
  };
};

export const resetUpdateProductError = () => ({
  type: RESET_UPDATE_PRODUCT_ERROR,
});

// delete action creators for method "DELETE"
export const deleteProduct = (productId) => {
  return {
    type: DELETE_PRODUCT_ACTION,
    payload: productId,
  };
};

export const deleteProductSuccess = (product) => {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    payload: product,
  };
};

export const deleteProductFailure = (error) => {
  return {
    type: DELETE_PRODUCT_FAILURE,
    payload: error,
  };
};
