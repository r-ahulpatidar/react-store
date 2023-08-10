import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductAction } from '../../store/products/action';
import Header from '../../components/Header';
import { logOutAction } from '../../store/auth/action';
import ProductCard from '../../components/ProductCard';

const Products = () => {
  const user = useSelector((state) => state?.auth?.user);
  const products = useSelector((state) => state?.product?.products);
  console.log('product component', products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductAction());
  }, [dispatch]);

  return (
    <>
      <Header user={user} onLogout={() => dispatch(logOutAction())} />
      <div className="m-4 flex justify-end">
        <a
          href="/products/create"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          + Create new product
        </a>
      </div>
      <section className="flex flex-wrap m-10">
        {products.map((product, i) => (
          <ProductCard data={product} key={i} />
        ))}
      </section>
    </>
  );
};

export default Products;
