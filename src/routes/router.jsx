import { createBrowserRouter } from 'react-router-dom';
import Root from './root';

import {
  SignIn,
  ProductDetailsContainer,
  SignupPage,
  Store,
  AnnouncementContainer,
  UserProfile,
  Home,
  UserSetting,

} from '../pages';
import ClassLayout from '../layout/classLayout';
import { ClassInfoComp, HomeClass, ProductDetails } from '../components';
import StoreLayout from '../layout/Store';
import Chat from '../components/chat';
import RequireAuthProvider from '../context/navigate';
import CheckAdminProvider from '../context/admin';
import DashLayout from '../layout/DashLayout';
import {
  AnnouncementDash,
  ClassDash, HomeDash, OrderDash, ProductDash, SubscriptionDash, UserDash, CalendarDash,
} from '../pages/admins';
import ProfileDash from '../pages/admins/profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CheckAdminProvider><Root /></CheckAdminProvider>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'signin',
        element: <SignIn />,

      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
      {
        path: 'class',
        element: <ClassLayout />,
        children: [
          {
            index: true,
            element: <HomeClass />,
          },
          {
            path: ':id',
            element: <ClassInfoComp />,
          },
        ],
      },
      {
        path: 'store',
        element: <StoreLayout />,
        children: [
          {
            index: true,
            element: <Store />,
          },
        ],
      },
      {
        path: 'announcement',
        element: <AnnouncementContainer />,
      },
      {
        path: 'product',
        element: <ProductDetailsContainer />,
        children: [
          {
            path: ':id',
            element: <ProductDetails />,
          },
        ],
      },
      {
        path: 'profile',
        element: <UserProfile />,
        children: [
          {
            index: true,
            element: <UserProfile />,
          },
          {
            path: 'orders',
            element: <UserProfile />,
          },
        ],
      },
      {
        path: 'setting',
        element: <UserSetting />,

      },
      {
        path: 'chat',
        element: <Chat />,

      },

    ],
  },
  {
    path: '/signin',
    element: <SignIn />,
  },

  {
    path: '/dashboard',
    element: <RequireAuthProvider><DashLayout /></RequireAuthProvider>,
    children: [
      {
        index: true,
        element: <HomeDash />,
      },
      {
        path: 'users',
        element: <UserDash />,
      },
      {
        path: 'products',
        element: <ProductDash />,
      },
      {
        path: 'classes',
        element: <ClassDash />,
      },
      {
        path: 'orders',
        element: <OrderDash />,
      },
      {
        path: 'announcements',
        element: <AnnouncementDash />,
      },
      {
        path: 'subscriptions',
        element: <SubscriptionDash />,
      },
      {
        path: 'profile',
        element: <ProfileDash />,
      },
      {
        path: 'calendar',
        element: <CalendarDash />,
      },

    ],
  },
]);

export default router;
