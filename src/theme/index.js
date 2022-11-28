import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7bc2d6',
      contrastText: '#000000',
    },
    secondary: {
      main: '#3b3b3b',
      contrastText: '#000000',
    },
    error: {
      main: '#ef7a52',
    },
    text: {
      primary: '#c9e1ef',
      secondary: 'rgba(201, 223, 239, 0.7)',
      disabled: 'rgba(201, 223, 239, 0.5)',
      hint: 'rgba(201, 223, 239, 0.5)',
    },
    background: {
      default: '#022d3b9c',
      paper: '#022d3b9c',
      paper2: '#402439',
      paper3: '#201638',
    },
  },
  typography: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    h2: {
      fontFamily: 'Rock Salt, cursive',
      fontSize: '3rem',
    },
    h3: {
      fontFamily: 'Rock Salt, cursive',
      fontSize: '3rem',
    },
  },
  shape: {
    borderRadius: 20,
  },
});

export default theme;
