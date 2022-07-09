import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const HomePageLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomePageLayout;
