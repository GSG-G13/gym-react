import { createBrowserRouter } from 'react-router-dom';
import Root from './root';

import AnnouncementContainer from '../pages/user/announcement';
import Class from '../pages/user/class';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/announcements',
        element: <AnnouncementContainer />,
      }, {
        path: '/classes',
        element: <Class />,
      },
    ],
  },
]);

export default router;
