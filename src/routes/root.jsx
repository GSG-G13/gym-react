import { Outlet } from 'react-router-dom';
import { Footer, NavbarClient } from '../components';

const Root = () => (
  <div>
    <NavbarClient />
    <Outlet />
    <Footer />
  </div>
);

export default Root;
