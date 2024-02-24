import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Header } from '../Header/Header';
import { Loader } from '../Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <div className="container">
          <Outlet />
        </div>
      </Suspense>
      <ToastContainer autoClose={3000} />
    </>
  );
};
