import { Outlet } from 'react-router-dom';
import { ClassesList } from '../components';

const ClassLayout = () => (
  <div>
    <ClassesList />

    <Outlet />
  </div>
);

export default ClassLayout;
