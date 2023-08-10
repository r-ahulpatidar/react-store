import { API_URL } from '../config';

export const loginApi = async () => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({
      username: 'atuny0',
      password: '9uQFF1Lh',
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  return await response.json();
};

export const signupApi = async () => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({
      username: 'atuny0',
      password: '9uQFF1Lh',
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  return await response.json();
};

// for Post
// get a post
export const getPostApi = async () => {
  const response = await fetch(`${API_URL}/posts`, {
    method: 'GET',
  });
  return response.json();
};

// Create a post
export const createPostApi = async (post) => {
  const response = await fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  });
  return await response.json();
};

// Update a post
export const updatePostApi = async ({id, post}) => {
  // const { title, userId, body, reactions, tags } = post;
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json',
    },
  });
  return await response.json();
};

// Get a single post
export const getSinglePostApi = async (id) => {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: 'GET',
  });
  return await response.json();
};

// Delete a post
export const deletePostApi = async (id) => {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
};

// for Product
export const getProductApi = async () => {
  const response = await fetch(`${API_URL}/products`, {
    method: 'GET',
  });
  return response.json();
};

// Create a post for Product
export const createProductApi = async (product) => {
  const response = await fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  return await response.json();
};

// Update a post
export const updateProductApi = async ({ id, product }) => {
  // const { productId, title, description, price } = product;
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify(product),
    headers: {
      'Content-type': 'application/json',
    },
  });
  return await response.json();
};

// Get a single peoduct
export const getSingleProductApi = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: 'GET',
  });
  return await response.json();
};

// Delete a post for Product
export const deleteProductApi = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
};

// for Users
export const getUserApi = async () => {
  const response = await fetch(`${API_URL}/users`, {
    method: 'GET',
  });
  return response.json();
};

// Create a post for Users
export const createUserApi = async (user) => {
  const response = await fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return await response.json();
};

// update for users
export const updateUserApi = async ({ id, user }) => {
  // const { userId, firstName, lastName, age } = user;
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json',
    },
  });
  return await response.json();
};

// Get a single peoduct
export const getSingleUserApi = async (id) => {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: 'GET',
  });
  return await response.json();
};

// Delete a post for Product
export const deleteUserApi = async (id) => {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
};


