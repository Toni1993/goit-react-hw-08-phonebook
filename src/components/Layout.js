import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from './AppBar';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
