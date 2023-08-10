import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from '../store/products/action';
import { useState } from 'react';

const ProductCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = props;

  const dispatch = useDispatch();
  const navigator = useNavigate();

  const handleEditProduct = (id) => {
    navigator(`/products/${id}/edit`);
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
    closeModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={data.images && data.images[1]}
          alt="Product Thumbnail"
          className="w-full h-60 object-cover"
        />
        <div className="p-4 h-60">
          <h2 className="text-gray-800 font-bold text-xl mb-2">{data.title}</h2>
          <p className="text-gray-600 text-sm">{data.description}</p>
          <div className="flex items-center justify-between mt-4">
            <div className="text-yellow-500 font-bold text-xl">
              ${data.price}
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 ml-1">{data.rating}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-4 mx-4 font-bold">
          <button
            className="border border-green-400 rounded p-2"
            onClick={() => handleEditProduct(data.id)}
          >
            Edit Product
          </button>
          <button
            className="border border-red-400 rounded p-2"
            // onClick={() => handleDeleteProduct(data.id)}
            onClick={openModal}
          >
            Delete
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <h3 className="text-lg font-bold mb-2">Confirm Delete</h3>
            <p>Are you sure you want to delete this Product?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                type="button"
                className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
              >
                No
              </button>
              <button
                onClick={() => handleDeleteProduct(data.id)}
                type="button"
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
