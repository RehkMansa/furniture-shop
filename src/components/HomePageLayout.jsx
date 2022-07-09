import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const HomePageLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
        dignissimos et? Odit nulla soluta optio neque aspernatur ea rem est.
      </p>
      <div>Footer</div>
    </>
  );
};

export default HomePageLayout;
