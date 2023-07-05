import { BrowserRouter, Routes, Route } from 'react-router-dom';
import THEME from './utilize/Theme';
import Provider from './context/Provider';
// import {
//   AnnouncementContainer,
//   Class,
//   Home,
//   ProductDetailsContainer,
//   SignIn,
//   SignupPage,
//   Store,
//   SubscriptionDashboard,
//   UserProfile,
//   UserSetting,
// } from './pages';
// import Root from './routes/root';
// import ClassLayout from './layout/classLayout';
// import StoreLayout from './layout';
// import { ClassInfoComp } from './components';
import DashboardLayout from './layout/DashboardLayout';
import HomeDashboard from './pages/admin/homeDashboard';
import UserList from './pages/admin/user';
import ProductListDashboard from './pages/admin/productList';
import AnnouncementDashboard from './pages/admin/announcement';
import { SignInComp } from './components';

const App = () => (
  <Provider>
    <THEME>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignInComp />} />
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<HomeDashboard />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/products" element={<ProductListDashboard />} />
            <Route path="/announcements" element={<AnnouncementDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </THEME>
  </Provider>
);
export default App;
