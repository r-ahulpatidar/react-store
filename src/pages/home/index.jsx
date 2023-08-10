import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import { logOutAction } from '../../store/auth/action';

const Home = () => {
  const user = useSelector((state) => state?.auth?.user);

  const dispatch = useDispatch();

  return (
    <>
      <Header user={user} onLogout={() => dispatch(logOutAction())} />
      <h2 className="text-center text-xl mt-32">Welcome to the home page!</h2>
    </>
  );
};

export default Home;
