import { Link } from 'react-router-dom';

const CreateHeader = (props) => {
  const newProps = {
    onBackClick: () => {},
    ...props,
  };

  const { title, onBackClick } = newProps;

  return (
    <header className="bg-blue-500 text-white">
      <div className="container mx-auto p-4 flex items-center">
        {/* <a href='/'> */}
        {/* <Link to='/' className='flex items-center'> */}
        <button onClick={onBackClick}>
          <svg
            className="w-6 h-6 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>

        <h1 className="text-2xl font-bold">{title}</h1>
        {/* </Link> */}
        {/* </a> */}
      </div>
    </header>
  );
};

export default CreateHeader;
