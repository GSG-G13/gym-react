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
  HomeDashboard,
  UserList,
  ClassDashBoard,
  DashOrderPage,
  SubscriptionDashboard,
} from '../pages';
import ClassLayout from '../layout/classLayout';
import { ClassInfoComp, HomeClass, ProductDetails } from '../components';
import StoreLayout from '../layout/Store';
import Chat from '../components/chat';
import ProductListDashboard from '../pages/admin/productList';
import AnnouncementDashboard from '../pages/admin/announcement';
import DashboardLayout from '../layout/DashboardLayout';
import RequireAuthProvider from '../context/navigate';
import CheckAdminProvider from '../context/admin';

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
    path: '/dashboard',
    element: <RequireAuthProvider><DashboardLayout /></RequireAuthProvider>,
    children: [
      {
        index: true,
        element: <HomeDashboard />,
      },
      {
        path: 'signin',
        element: <SignIn />,
      },
      {
        path: 'users',
        element: <UserList />,
      },
      {
        path: 'products',
        element: <ProductListDashboard />,
      },
      {
        path: 'classes',
        element: <ClassDashBoard />,
      },
      {
        path: 'orders',
        element: <DashOrderPage />,
      },
      {
        path: 'announcements',
        element: <AnnouncementDashboard />,
      },
      {
        path: 'subscriptions',
        element: <SubscriptionDashboard />,
      },
    ],
  },
]);

export default router;
