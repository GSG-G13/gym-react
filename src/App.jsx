import { BrowserRouter, Routes, Route } from 'react-router-dom';
import THEME from './utilize/Theme';
import Provider from './context/Provider';
import {
  AnnouncementContainer,
  Class,
  Home,
  ProductDetailsContainer,
  SignIn,
  SignupPage,
  Store,
  UserProfile,
  UserSetting,
} from './pages';
import Root from './routes/root';
import ClassLayout from './layout/classLayout';
import StoreLayout from './layout';
import { ClassInfoComp } from './components';
import AnnouncementDashboard from './pages/admin/announcement';

const App = () => (
  <Provider>
    <THEME>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AnnouncementDashboard />}>
            <Route index element={<Home />} />
            <Route path="class" element={<ClassLayout />}>
              <Route index element={<Class />} />
              <Route path=":id" element={<ClassInfoComp />} />
            </Route>
            <Route path="store" element={<StoreLayout />}>
              <Route index element={<Store />} />
            </Route>
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="announcement" element={<AnnouncementContainer />} />
            <Route path="product/:id" element={<ProductDetailsContainer />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="setting" element={<UserSetting />} />
          </Route>
          <Route path="*" element={<h1>this page does not exist</h1>} />
        </Routes>
      </BrowserRouter>

    </THEME>
  </Provider>
);
export default App;
