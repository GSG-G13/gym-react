import { createBrowserRouter } from 'react-router-dom';
import Root from './root';

import {
  SignIn,
  ProductDetailsContainer,
  SignupPage,
  Store,
  Class,
  AnnouncementContainer,
  UserProfile,
} from '../pages';
import ClassLayout from '../layout/classLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <h1>home page</h1>,
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
        element: <ClassLayout />,
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
            element: <h1>test</h1>,
          },
        ],
      },
      {
        path: '/product',
        element: <ProductDetailsContainer />,
      },
      {
        path: '/user',
        element: <h1>test</h1>,
        children: [
          {
            path: '/user/signup',
            element: <SignupPage />,
          },
          {
            path: '/user/signin',
            element: <SignIn />,
          },
          {
            path: '/user/profile',
            element: <UserProfile />,
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
