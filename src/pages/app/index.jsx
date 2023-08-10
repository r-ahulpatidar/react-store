import { Route, Routes } from 'react-router-dom';
import Home from '../home';
import { useSelector } from 'react-redux';
import Auth from '../auth';
import Posts from '../posts';
import Products from '../products';
import Users from '../users';
import CreatePost from '../posts/CreatePost';
import EditPost from '../posts/EditPost';
import CreateUser from '../users/CreateUser';
import CreateProduct from '../products/CreateProduct';
import EditProduct from '../products/EditProduct';
import EditUser from '../users/EditUser';
import ProtectedRoute from '../../components/ProtectedRoute';
import { Navigate } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        index
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/posts"
        element={
          <ProtectedRoute>
            <Posts />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/posts/:postId/edit"
        element={
          <ProtectedRoute>
            <EditPost />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/posts/create"
        element={
          <ProtectedRoute>
            <CreatePost />
          </ProtectedRoute>
        }
      />

      <Route
        exact
        path="/users"
        element={
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/users/:userId/edit"
        element={
          <ProtectedRoute>
            <EditUser />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/users/create"
        element={
          <ProtectedRoute>
            <CreateUser />
          </ProtectedRoute>
        }
      />

      <Route
        exact
        path="/products"
        element={
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/products/:productId/edit"
        element={
          <ProtectedRoute>
            <EditProduct />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/products/create"
        element={
          <ProtectedRoute>
            <CreateProduct />
          </ProtectedRoute>
        }
      />

      <Route exact path="/auth" element={<Auth />} />

      {/* <Route path='*' element={<h1>404</h1>} /> */}
      <Route path="*" element={<Navigate to={'/auth'} replace={true} />} />
    </Routes>
  );
};

export default App;
