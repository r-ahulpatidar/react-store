// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { createPost } from '../../store/posts/action';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import CreateHeader from '../../components/CreateHeader';

// const CreatePost = () => {
//   const [title, setTitle] = useState('');
//   const [userId, setUserId] = useState('');
//   const [body, setBody] = useState('');
//   const [tags, setTags] = useState([]);

//   const handleTagsChange = (e) => {
//     const value = e.target.value;
//     const tagList = value.split(',').map((tag) => tag.trim());
//     setTags(tagList);
//   };

//   const createPostError = useSelector((state) => state?.post?.createPostError);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // const handleCreatePost = (e) => {
//   //   e.preventDefault();

//   //   const post = { title, userId, body, tags };
//   //   // dispatch(getPostAction());
//   //   dispatch(createPost(post));
//   //   // navigate('/posts');
//   //   if (createPostError) {
//   //     alert(createPostError);
//   //   } else {
//   //     navigate('/posts');
//   //   }
//   //   console.log('post', post);

//   //   // Reset the form
//   //   setTitle('');
//   //   setUserId('');
//   //   setBody('');
//   //   setTags([]);
//   // };

//   const handleCreatePost = async (e) => {
//     e.preventDefault();

//     const post = { title, userId, body, tags };
//     dispatch(createPost(post));

//     if (createPostError) {
//       toast.error('Failed to create post'); // Display failure message
//       console.error(createPostError);
//     } else {
//       toast.success('Post created successfully'); // Display success message
//       navigate('/posts');
//     }

//     // Reset the form
//     setTitle('');
//     setUserId('');
//     setBody('');
//     setTags([]);
//   };

//   const handleBackButtonClick = () => {
//     navigate(-1); // Navigate back to the previous page
//   };

//   return (
//     <>
//     <CreateHeader title={'Create New Post'} handleBackButtonClick={handleBackButtonClick} />
//       {/* <header className="bg-blue-500 text-white">
//         <div className="container mx-auto p-4 flex items-center">
//           <svg
//             className="w-5 h-5 mr-1"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//             onClick={handleBackButtonClick}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M10 19l-7-7m0 0l7-7m-7 7h18"
//             />
//           </svg>

//           <h1 className="text-2xl font-bold">Create New Post</h1>
//         </div>
//       </header> */}
//       {/* <h2 className="text-center text-xl mt-32">
//         Welcome to the Create Post page!
//       </h2> */}
//       <div className="bg-gray-200 w-full max-w-md mx-auto p-5">
//         <h1 className="text-center text-2xl font-bold mb-4">Add New Post</h1>
//         <form onSubmit={handleCreatePost} className="flex flex-col">
//           <div className="mb-2 flex justify-between items-center">
//             <label htmlFor="title" className="text-gray-700 font-semibold mb-1">
//               Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               placeholder="Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="bg-white border border-green-300 rounded-md py-2 px-4"
//             />
//           </div>
//           <div className="mb-2 flex justify-between items-center">
//             <label
//               htmlFor="userId"
//               className="text-gray-700 font-semibold mb-1"
//             >
//               User ID
//             </label>
//             <input
//               type="number"
//               id="userId"
//               placeholder="User ID"
//               value={userId}
//               onChange={(e) => setUserId(e.target.value)}
//               className="bg-white border border-green-300 rounded-md py-2 px-4"
//             />
//           </div>
//           <div className="mb-2 flex justify-between items-center">
//             <label htmlFor="body" className="text-gray-700 font-semibold mb-1">
//               Body
//             </label>
//             <textarea
//               id="body"
//               placeholder="Body"
//               cols="24"
//               value={body}
//               onChange={(e) => setBody(e.target.value)}
//               className="bg-white border border-green-300 rounded-md py-2 px-4"
//             ></textarea>
//           </div>
//           <div className="mb-2 flex justify-between items-center">
//             <label htmlFor="tags" className="text-gray-700 font-semibold mb-1">
//               Tags
//             </label>
//             <input
//               type="text"
//               id="tags"
//               placeholder="Tags (comma-separated)"
//               value={tags.join(', ')}
//               onChange={handleTagsChange}
//               className="bg-white border border-green-300 rounded-md py-2 px-4"
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-green-600 text-white py-2 px-4 rounded-md mt-2"
//           >
//             Create Post
//           </button>
//         </form>
//       </div>
//       <ToastContainer
//         position="bottom-right"
//         autoClose={1000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//     </>
//   );
// };

// export default CreatePost;

import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import CreateHeader from '../../components/CreateHeader';
import { createPostAction } from '../../store/posts/action';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePost = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const createPostError = useSelector((state) => state?.post?.createPostError);

  const validator = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = 'Required';
    }

    if (!values.userId) {
      errors.userId = 'Required';
    }

    return errors;
  };

  useEffect(() => {
    if (createPostError) {
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
    } else if (createPostError !== null) {
      navigator('/posts');
      // Success handling Toastify
      toast.success('Post Created Successfully', {
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
  }, [createPostError, navigator]);

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log(values);
    dispatch(createPostAction(values));
    setSubmitting(false);
  };

  const goBack = () => {
    navigator('/posts');
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
            User Id:
            <br />
            <input
              type="number"
              name="userId"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.userId}
              className="px-2 py-1 border rounded border-green-500 w-full"
            />
          </label>
          {errors.userId && touched.userId && (
            <span className="text-red-500 text-sm">{errors.userId}</span>
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
            Create post
          </button>
        </div>
      </form>
    );
  };

  return (
    <>
      <CreateHeader title={'Create new post'} onBackClick={goBack} />
      <div className="h-screen bg-gray-200 pt-32">
        <div className="w-96 border rounded-md overflow-hidden bg-white mx-auto">
          <div className="m-4">
            <Formik
              initialValues={{ title: '', userId: '' }}
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

export default CreatePost;
