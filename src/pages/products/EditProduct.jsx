import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import CreateHeader from '../../components/CreateHeader';
import {
  resetUpdateProductError,
  updateProduct,
} from '../../store/products/action';
import { useEffect, useState } from 'react';
import { getSingleProductApi } from '../../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProduct = () => {
  const [productData, setProductData] = useState(null);
  const { productId } = useParams();
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const updateProductError = useSelector(
    (state) => state?.product?.updateProductError
  );

  const getProductData = async (productId) => {
    const data = await getSingleProductApi(productId);
    const { title, description, price } = data;
    const formDefaultProductValues = {
      title,
      description,
      price,
    };
    setProductData(formDefaultProductValues);
  };

  useEffect(() => {
    getProductData(productId);
  }, [productId]);

  const goBack = () => {
    navigator('/products'); // Navigate back to the previous page
  };

  const validator = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = 'Required';
    }
    if (!values.description) {
      errors.description = 'Required';
    }
    if (!values.price) {
      errors.price = 'Required';
    }

    return errors;
  };

  useEffect(() => {
    if (updateProductError) {
      // Error handling Toastify
      toast.error('🦄 Wow so easy!', {
        // position: "bottom-left",
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else if (updateProductError !== null) {
      navigator('/products');
      dispatch(resetUpdateProductError());
      // Success handling Toastify
      toast.success('Post Edit Successfully', {
        position: 'bottom-right',
        // position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  }, [updateProductError, navigator, dispatch]);

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log(values);
    dispatch(updateProduct({ id: productId, product: values }));
    setSubmitting(false);
  };

  const checkAllAvailabilityProperties = (formikProps) => {
    const {
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      resetForm,
      /* and other goodies */
    } = formikProps;

    return (
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="my-4">
            Title:
            <br />
            <input
              type="text"
              name="title"
              autoComplete="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              className="px-2 py-1 border rounded border-green-500 w-full"
            />
          </label>
          {errors.title && touched.title && (
            <span className="text-red-500 text-sm">{errors.title}</span>
          )}
        </div>

        <div className="mb-4">
          <label className="my-4">
            Description:
            <br />
            <input
              type="text"
              name="description"
              autoComplete="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              className="px-2 py-1 border rounded border-green-500 w-full"
            />
          </label>
          {errors.description && touched.description && (
            <span className="text-red-500 text-sm">{errors.description}</span>
          )}
        </div>

        <div className="mb-4">
          <label className="my-4">
            Price:
            <br />
            <input
              type="number"
              name="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
              className="px-2 py-1 border rounded border-green-500 w-full"
            />
          </label>
          {errors.price && touched.price && (
            <span className="text-red-500 text-sm">{errors.price}</span>
          )}
        </div>

        <div className="flex gap-4 mt-8 justify-end">
          <button
            type="reset"
            onClick={resetForm}
            className="flex-1 border py-2 rounded border-green-500 text-green-500"
          >
            Clear
          </button>

          <button
            type="submit"
            className="flex-1 border py-2 rounded bg-green-500 text-white"
            disabled={isSubmitting}
          >
            Edit Product
          </button>
        </div>
      </form>
    );
  };

  return (
    <>
      <CreateHeader title={'Edit Product'} onBackClick={goBack} />
      <div className="h-screen bg-gray-200 pt-32">
        <div className="w-96 border rounded-md overflow-hidden bg-white mx-auto">
          <div className="m-4">
            {productData && (
              <Formik
                initialValues={productData}
                validate={validator}
                onSubmit={onSubmit}
              >
                {checkAllAvailabilityProperties}
              </Formik>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
