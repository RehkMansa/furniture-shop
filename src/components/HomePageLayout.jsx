import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const HomePageLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomePageLayout;
