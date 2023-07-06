import { BrowserRouter, Routes, Route } from 'react-router-dom';
import THEME from './utilize/Theme';
import Provider from './context/Provider';
import {
  AnnouncementContainer,
  Class,
  ClassDashBoard,
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

const App = () => (
  <Provider>
    <THEME>
      <BrowserRouter>
        <Routes>
          <Route path="/classes" element={<ClassDashBoard />} />
          <Route path="/" element={<Root />}>

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
            <Route path="product" element={<ProductDetailsContainer />} />
            <Route path="profile" element={<UserProfile />}>
              <Route index element={<UserProfile />} />
              <Route path="orders" element={<UserProfile />} />
            </Route>
            <Route path="setting" element={<UserSetting />} />
          </Route>
          <Route path="*" element={<h1>this page does not exist</h1>} />
        </Routes>
      </BrowserRouter>

    </THEME>
  </Provider>
);
export default App;
