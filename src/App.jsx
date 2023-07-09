import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import THEME from './utilize/Theme';
import Provider from './context/Provider';
// import DashboardLayout from './layout/DashboardLayout';
// import HomeDashboard from './pages/admin/homeDashboard';
// import UserList from './pages/admin/user';
// import { SignInComp } from './components';
// import ProductListDashboard from './pages/admin/productList';
// import ClassDashBoard from './pages/admin/class';
// import DashOrderPage from './pages/admin/dashbored-order';
// import AnnouncementDashboard from './pages/admin/announcement';
// import SubscriptionDashboard from './pages/admin/subscription';
import {
  AnnouncementContainer, Home, ProductDetailsContainer, SignupPage, Store, UserProfile, UserSetting,
} from './pages';
import {
  ClassInfoComp, HomeClass, ProductDetails, SignInComp,
} from './components';
import ClassLayout from './layout/classLayout';
import StoreLayout from './layout/Store';
import Root from './routes/root';
import Chat from './components/chat/index';

const App = () => (
  <Provider>
    <THEME>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="class" element={<ClassLayout />}>
              <Route index element={<HomeClass />} />
              <Route path=":id" element={<ClassInfoComp />} />
            </Route>
            <Route path="store" element={<StoreLayout />}>
              <Route index element={<Store />} />
            </Route>
            <Route path="signin" element={<SignInComp />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="announcement" element={<AnnouncementContainer />} />
            <Route path="product" element={<ProductDetailsContainer />}>
              <Route path=":id" element={<ProductDetails />} />
            </Route>
            <Route path="profile" element={<UserProfile />}>
              <Route index element={<UserProfile />} />
              <Route path="orders" element={<UserProfile />} />
            </Route>
            <Route path="setting" element={<UserSetting />} />
            <Route path="chat" element={<Chat />} />

          </Route>
          {/* <Route path="/announcement" element={<AnnouncementContainer />} />
          <Route path="/setting" element={<UserSetting />} />
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
          <Route path="*" element={<h1>this page does not exist</h1>} /> */}
        </Routes>
      </BrowserRouter>

    </THEME>
  </Provider>
);
export default App;
