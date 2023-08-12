// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { updatePost } from '../../store/posts/action';

// const EditPost = () => {
//   // const [postData, setPostData] = useState(null);
//   const { postId } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const posts = useSelector((state) => state?.post?.posts);
//   const post = posts.find((post) => post.id === parseInt(postId));

//   // const { title, userId, body, tags } = toPosts[postId - 1];

//   const [titleEdit, setTitle] = useState(post.title);
//   const [userIdEdit, setUserId] = useState(post.userId);
//   const [bodyEdit, setBody] = useState(post.body);
//   const [tagsEdit, setTags] = useState(post.tags);

//   const handleTagsChange = (e) => {
//     const value = e.target.value;
//     const tagList = value.split(',').map((tag) => tag.trim());
//     setTags(tagList);
//   };

//   const handleUpdatePost = (e) => {
//     e.preventDefault();

//     const postEdit = {
//       post: { titleEdit, userIdEdit, bodyEdit, tagsEdit },
//       postId: postId,
//     };

//     dispatch(updatePost(postEdit));
//     navigate('/posts');
//   };

//   return (
//     <>
//       <header className="bg-blue-500 text-white">
//         <div className="container mx-auto p-4 flex items-center">
//           <svg
//             className="w-5 h-5 mr-1"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M10 19l-7-7m0 0l7-7m-7 7h18"
//             />
//           </svg>

//           <h1 className="text-2xl font-bold">Edit Post</h1>
//         </div>
//       </header>
//       {/* <h2 className="text-center text-xl mt-32">
//         Welcome to the Edit Post page!
//       </h2> */}
//       <div className="bg-gray-200 w-full max-w-md mx-auto p-5">
//         <h1 className="text-center text-2xl font-bold mb-4">Add New Post</h1>
//         <form onSubmit={handleUpdatePost} className="flex flex-col">
//           <div className="mb-2 flex justify-between items-center">
//             <label htmlFor="title" className="text-gray-700 font-semibold mb-1">
//               Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               placeholder="Title"
//               value={titleEdit}
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
//               value={userIdEdit}
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
//               value={bodyEdit}
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
//               value={tagsEdit.join(', ')}
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
//     </>
//   );
// };

// export default EditPost;

import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import CreateHeader from '../../components/CreateHeader';
import {
  updatePostAction,
  resetUpdatePostError,
} from '../../store/posts/action';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getSinglePostApi } from '../../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditPost = () => {
  const [postData, setPostData] = useState(null);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  // const params = useParams();
  const { postId } = useParams();

  const updatePostError = useSelector((state) => state.post.updatePostError);

  const getData = async (postId) => {
    const data = await getSinglePostApi(postId);
    const { title, userId, body, reactions, tags } = data;
    const formDefaultValues = {
      title,
      userId,
      body,
      reactions,
      // ...tags,
    };
    setPostData(formDefaultValues);
  };

  useEffect(() => {
    getData(postId);
  }, [postId]);

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
    if (updatePostError) {
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
    } else if (updatePostError !== null) {
      console.log('updatePostError', updatePostError);
      dispatch(resetUpdatePostError());
      navigator('/posts');
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
      // Success handling Toastify
    }
  }, [updatePostError, navigator, dispatch]);

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log(values);
    dispatch(updatePostAction({ id: postId, post: values }));
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

        <div className="mb-4">
          <label className="my-4">
            Body:
            <br />
            <textarea
              rows={5}
              name="body"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.body}
              className="px-2 py-1 border rounded border-green-500 w-full"
            />
          </label>
          {errors.body && touched.body && (
            <span className="text-red-500 text-sm">{errors.body}</span>
          )}
        </div>

        <div className="mb-4">
          <label className="my-4">
            Reactions:
            <br />
            <input
              type="number"
              name="reactions"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.reactions}
              className="px-2 py-1 border rounded border-green-500 w-full"
            />
          </label>
          {errors.reactions && touched.reactions && (
            <span className="text-red-500 text-sm">{errors.reactions}</span>
          )}
        </div>

        {/* <div className="mb-4">
          <label className="my-4">
            Tags:
            <br />
            <input
              type="text"
              name="tags"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tags.join(', ')}
              className="px-2 py-1 border rounded border-green-500 w-full"
            />
          </label>
          {errors.tags && touched.tags && (
            <span className="text-red-500 text-sm">{errors.tags}</span>
          )}
        </div> */}

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
            Update post
          </button>
        </div>
      </form>
    );
  };

  return (
    <>
      <CreateHeader title={'Edit post'} onBackClick={goBack} />
      <div className="h-screen bg-gray-200 pt-32">
        <div className="w-96 border rounded-md overflow-hidden bg-white mx-auto">
          <div className="m-4">
            {postData && (
              <Formik
                initialValues={postData}
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

export default EditPost;
