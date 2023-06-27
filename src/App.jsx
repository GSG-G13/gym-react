import { BrowserRouter, Routes, Route } from 'react-router-dom';
import THEME from './utilize/Theme';
import './index.css';
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

const App = () => (
  <Provider>
    <THEME>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route
              path="class"
              element={<ClassLayout />}
            >
              <Route index element={<Class />} />
            </Route>
            <Route path="store" element={<Store />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="announcement" element={<AnnouncementContainer />} />
            <Route path="product" element={<ProductDetailsContainer />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="setting" element={<UserSetting />} />

          </Route>
        </Routes>
      </BrowserRouter>

    </THEME>
  </Provider>
);
export default App;
