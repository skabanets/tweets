import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from '../Header/Header';
import { Loader } from '../Loader/Loader';
import { ScrollUpButton } from '../ScrollUpButton/ScrollUpButton';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <div className="container">
          <Outlet />
        </div>
      </Suspense>
      <ScrollUpButton />
      <ToastContainer autoClose={3000} />
    </>
  );
};
