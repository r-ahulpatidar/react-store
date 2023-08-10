// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { deletePost } from '../store/posts/action';

// const PostCard = (props) => {
//   const { data } = props;

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleEditPost = (id) => {
//     navigate(`/posts/${id}/edit`);
//   };

//   const handleDeletePost = (id) => {
//     dispatch(deletePost(id));
//   }

//   return (
//     <div className="border rounded p-4 m-4">
//       <h3 className="font-bold">{data.title}</h3>
//       <p className="my-4">{data.body}</p>
//       <p>
//         {data.tags?.map((tag) => (
//           <span key={tag} className="bg-green-200 rounded-full px-2 py-1 mx-1">
//             {tag}
//           </span>
//         ))}
//       </p>
//       {/* { for uddate the post } */}
//       <div className="flex justify-end">
//         <button
//           onClick={() => handleEditPost(data.id)}
//           className="border border-green-400 rounded px-4 py-1 font-bold"
//         >
//           Edit Post
//         </button>
//         <button
//           onClick={() => handleDeletePost(data.id)}
//           className="border border-red-400 rounded px-4 py-1 font-bold"
//         >
//           Delete Post
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PostCard;

import { Link } from 'react-router-dom';
import { deletePost } from '../store/posts/action';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const PostCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = props;

  const dispatch = useDispatch();

  const handleDeletePost = (id) => {
    dispatch(deletePost(id));
    closeModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="border rounded p-4 m-4">
      <div className="flex gap-4 justify-between items-center">
        <h3 className="font-bold">{data.title}</h3>
        <div>
          <button
            // onClick={() => handleDeletePost(data.id)}
            onClick={openModal}
            type="reset"
            className="flex-1 border p-2 rounded text-green-500 mr-2"
          >
            Delete
          </button>

          {/* <a href={`/posts/${data?.id}/edit`}>
            <button type='submit' className='flex-1 border p-2 rounded bg-green-500 text-white'>
              Edit post
            </button>
          </a> */}

          <Link to={`/posts/${data?.id}/edit`}>
            <button
              type="submit"
              className="flex-1 border p-2 rounded bg-green-500 text-white"
            >
              Edit post
            </button>
          </Link>
        </div>
      </div>

      <p className="my-4">{data.body}</p>
      <p className="">
        {data?.tags?.map((tag) => (
          <span key={tag} className="bg-green-200 rounded-full px-2 py-1 mx-1">
            {tag}
          </span>
        ))}
      </p>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <h3 className="text-lg font-bold mb-2">Confirm Delete</h3>
            <p>Are you sure you want to delete this post?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                type="button"
                className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
              >
                No
              </button>
              <button
                onClick={() => handleDeletePost(data.id)}
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

export default PostCard;
