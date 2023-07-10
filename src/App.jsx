import {
  RouterProvider,
} from 'react-router-dom';
import THEME from './utilize/Theme';
import Provider from './context/Provider';
import router from './routes/router';

const App = () => (
  <Provider>
    <THEME>
      <RouterProvider router={router} />

    </THEME>
  </Provider>
);
export default App;
