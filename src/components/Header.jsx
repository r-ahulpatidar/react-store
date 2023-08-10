import { Link } from 'react-router-dom';

const Header = ({ user, onLogout }) => {
  return (
    <header className="border-b">
      <nav className="bg-white border-gray-200 px-4 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <a href="/" className="flex">
              <img
                src={user.image}
                className="mr-3 h-9 rounded-full border"
                alt="User"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap">
                {user.firstName} {user.lastName}
              </span>
            </a>
          </div>
          {/* New Navbar section added */}
          <div className="flex items-center justify-between">
            <ul className="flex space-x-5">
              <li>
                <a href="/posts" className="hover:text-gray-300 p-1">
                  Posts
                </a>
              </li>
              <li>
                <a href="/users" className="hover:text-gray-300 p-1">
                  Users
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-gray-300 p-1">
                  Products
                </a>
              </li>
            </ul>
            {/* end */}
            <button
              className="border rounded px-4 py-1 text-gray-800 ml-5"
              onClick={onLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.defaultProps = {
  user: {},
  onLogout: () => {},
};

export default Header;
