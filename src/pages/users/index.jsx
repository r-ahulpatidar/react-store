import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import { logOutAction } from '../../store/auth/action';
import { useEffect } from 'react';
import { getUserAction } from '../../store/users/action';
import UserCard from '../../components/UserCard';
import { Link } from 'react-router-dom';

const Users = () => {
  const user = useSelector((state) => state?.auth?.user);
  const users = useSelector((state) => state?.user?.users);
  console.log('users component', users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);

  return (
    <>
      <Header user={user} onLogout={() => dispatch(logOutAction())} />
      <div className="m-4 flex justify-end">
        <Link
          to="/users/create"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          + Create new User
        </Link>
      </div>
      <section className="flex flex-wrap -mx-4">
        {users.map((user) => (
          <UserCard data={user} key={user.id} />
        ))}
      </section>
    </>
  );
};

export default Users;
