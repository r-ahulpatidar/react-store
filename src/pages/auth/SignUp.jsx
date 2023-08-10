import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { signUpAction } from '../../store/auth/action';

const SignUp = () => {
  const dispatch = useDispatch();

  const validator = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    }

    if (!values.lastName) {
      errors.lastName = 'Required';
    }

    if (!values.email) {
      errors.email = 'Required';
    }

    if (!values.gender) {
      errors.gender = 'Required';
    }

    if (!values.username) {
      errors.username = 'Required';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Must be 8 characters or more';
    }

    return errors;
  };

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    dispatch(signUpAction(values));
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
            Gender
            <br />
            <select
              name="gender"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.gender}
              className="px-2 py-1 border rounded border-green-500 w-full"
            >
              <option value="">None</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          {errors.gender && touched.gender && (
            <span className="text-red-500 text-sm">{errors.gender}</span>
          )}
        </div>

        <div className="mb-4">
          <label className="my-4">
            Email:
            <br />
            <input
              type="email"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="px-2 py-1 border rounded border-green-500 w-full"
            />
          </label>
          {errors.email && touched.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>

        <div className="mb-4">
          <label className="my-4">
            Username:
            <br />
            <input
              type="text"
              name="username"
              autoComplete="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              className="px-2 py-1 border rounded border-green-500 w-full"
            />
          </label>
          {errors.username && touched.username && (
            <span className="text-red-500 text-sm">{errors.username}</span>
          )}
        </div>

        <div className="mb-4">
          <label className="my-4">
            Password:
            <br />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              autoComplete="current-password"
              className="px-2 py-1 border rounded border-green-500 w-full"
            />
          </label>
          {errors.password && touched.password && (
            <span className="text-red-500 text-sm">{errors.password}</span>
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
            Login
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className="m-4">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          gender: '',
          email: '',
          username: '',
          password: '',
        }}
        validate={validator}
        onSubmit={onSubmit}
      >
        {checkAllAvailabilityProperties}
      </Formik>
    </div>
  );
};

export default SignUp;
