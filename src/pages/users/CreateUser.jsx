import { Formik } from 'formik';
import CreateHeader from '../../components/CreateHeader';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUserAction } from '../../store/users/action';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateUser = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const createUserError = useSelector((state) => state?.user?.createUserError);

  const goBack = () => {
    navigator('/users'); // Navigate back to the previous page
  };

  const validator = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = 'Required';
    }
    if (!values.lastName) {
      errors.lastName = 'Required';
    }
    if (!values.age) {
      errors.age = 'Required';
    }

    return errors;
  };

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log(values);
    dispatch(createUserAction(values));
    setSubmitting(false);
  };

  useEffect(() => {
    if (createUserError) {
      // alert(createUserError);
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
    } else if (createUserError !== null) {
      navigator('/users');
      toast.success('User Created Successfully', {
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
  }, [createUserError, navigator]);

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
            First Name:
            <br />
            <input
              type="text"
              name="firstName"
              autoComplete="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              className="px-2 py-1 border rounded border-green-500 w-full"
            />
          </label>
          {errors.firstName && touched.firstName && (
            <span className="text-red-500 text-sm">{errors.firstName}</span>
          )}
        </div>

        <div className="mb-4">
          <label className="my-4">
            Last Name:
            <br />
            <input
              type="text"
              name="lastName"
              autoComplete="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              className="px-2 py-1 border rounded border-green-500 w-full"
            />
          </label>
          {errors.lastName && touched.lastName && (
            <span className="text-red-500 text-sm">{errors.lastName}</span>
          )}
        </div>

        <div className="mb-4">
          <label className="my-4">
            Age:
            <br />
            <input
              type="number"
              name="age"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.age}
              className="px-2 py-1 border rounded border-green-500 w-full"
            />
          </label>
          {errors.age && touched.age && (
            <span className="text-red-500 text-sm">{errors.age}</span>
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
            Create User
          </button>
        </div>
      </form>
    );
  };

  return (
    <>
      <CreateHeader title={'Create New User'} onBackClick={goBack} />
      <div className="h-screen bg-gray-200 pt-32">
        <div className="w-96 border rounded-md overflow-hidden bg-white mx-auto">
          <div className="m-4">
            <Formik
              initialValues={{ firstName: '', lastName: '', age: '' }}
              validate={validator}
              onSubmit={onSubmit}
            >
              {checkAllAvailabilityProperties}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
