import { BrowserRouter, Routes, Route } from 'react-router-dom';
import THEME from './utilize/Theme';
import Provider from './context/Provider';
import DashboardLayout from './layout/DashboardLayout';
import HomeDashboard from './pages/admin/homeDashboard';
import UserList from './pages/admin/user';
import { SignInComp } from './components';
import ProductListDashboard from './pages/admin/productList';
import ClassDashBoard from './pages/admin/class';
import DashOrderPage from './pages/admin/dashbored-order';
import AnnouncementDashboard from './pages/admin/announcement';
import SubscriptionDashboard from './pages/admin/subscription';

const App = () => (
  <Provider>
    <THEME>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignInComp />} />
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<HomeDashboard />} />
            <Route path="users" element={<UserList />} />
            <Route path="products" element={<ProductListDashboard />} />
            <Route path="classes" element={<ClassDashBoard />} />
            <Route path="orders" element={<DashOrderPage />} />
            <Route path="announcements" element={<AnnouncementDashboard />} />
            <Route path="subscriptions" element={<SubscriptionDashboard />} />
          </Route>
          <Route path="*" element={<h1>this page does not exist</h1>} />
        </Routes>
      </BrowserRouter>

    </THEME>
  </Provider>
);
export default App;
