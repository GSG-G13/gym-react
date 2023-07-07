// eslint-disable-next-line import/no-extraneous-dependencies
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    colors: {
      primary: '#1E1E1E',
      secondary: '#FFFFFF',
      darkBlue: '#FF4601',
      error: '#FFFFFF',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.5rem',
    },
    h3: {
      fontSize: '1.25rem',
    },
    h4: {
      fontSize: '1rem',
    },
    h5: {
      fontSize: '0.90rem',
    },
    h6: {
      fontSize: '0.70rem',
    },

  },
});

const THEME = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default THEME;
