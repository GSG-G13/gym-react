import { createBrowserRouter } from 'react-router-dom';
import Root from './root';

import AnnouncementContainer from '../pages/user/announcement';
import Class from '../pages/user/class';
import ProductDetailsContainer from '../pages/user/productDetails';
import Store from '../pages/user/product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Store />,
      },
      {
        path: '/dashboard',
        element: <h1>test</h1>,
        children: [
          {
            path: '/dashboard/home',
            element: <h1>test</h1>,
          },
          {
            // here, there is still some work but i want to do some basic set up and the rest later
            path: '/dashboard/users',
            element: <h1>test</h1>,
          },
          {
            path: '/dashboard/products',
            element: <h1>test</h1>,
          },
          {
            path: '/dashboard/classes',
            element: <h1>test</h1>,
          },
          {
            path: '/dashboard/orders',
            element: <h1>test</h1>,
          },
          {
            path: '/dashboard/announcement',
            element: <h1>test</h1>,
          },
        ],
      },
      {
        path: '/announcements',
        element: <AnnouncementContainer />,
      },
      {
        path: '/classes',
        element: <Class />,
        children: [
          {
            path: '/classes/:class',
            element: <Class />,
          },
        ],
      },
      {
        path: '/store',
        element: <Store />,
        children: [
          {
            path: '/store/:product',
            element: <ProductDetailsContainer />,
          },
        ],
      },
      {
        path: '/user',
        element: <h1>test</h1>,
        children: [
          {
            path: '/user/signup',
            element: <h1>test</h1>,
          },
          {
            path: '/user/signin',
            element: <h1>test</h1>,
          },
          {
            path: '/user/profile',
            element: <h1>test</h1>,
            children: [
              {
                path: '/user/profile/classes',
                element: <h1>test</h1>,
              },
              {
                path: '/user/profile/classes',
                element: <h1>test</h1>,
              },
            ],
          },
          {
            path: '/user/setting',
            element: <h1>test</h1>,
          },
        ],
      },
    ],
  },
]);

export default router;
