// eslint-disable-next-line import/no-extraneous-dependencies
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    colors: {
      primary: '#000',
      secondary: '#fff',
      darkBlue: '#002B5B',
      error: '#EA5455',
    },
    bg: {
      primary: '#F9F5EB',
      secondary: '#E4DCCF',
      third: '#EA5455',
      fourth: '#002B5B',
    },
    fontSizes: {
      sm: '0.75rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '10rem',
    },
    fontWeight: {
      sm: 400,
      md: 500,
      lg: 600,
      xl: 700,
    },
  },
});

const THEME = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default THEME;
