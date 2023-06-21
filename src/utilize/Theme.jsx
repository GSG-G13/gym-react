// eslint-disable-next-line import/no-extraneous-dependencies
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    colors: {
      primary: '#F9F5EB',
      secondary: '#E4DCCF',
      darkBlue: '#002B5B',
      error: '#EA5455',
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
      fontSize: '0.92rem',
    },
    h6: {
      fontSize: '0.75rem',
    },

  },
});

const THEME = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default THEME;
