import { BrowserRouter, Routes, Route } from 'react-router-dom';
import THEME from './utilize/Theme';
import './index.css';
import Provider from './context/Provider';
import { Store } from './pages';
import Root from './routes/root';

const App = () => (
  <Provider>
    <THEME>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Store />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </THEME>
  </Provider>
);
export default App;
