import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D67BA8',
    },
    secondary: {
      main: '#d86983',
      contrastText: '#000000',
    },
    error: {
      main: '#ef7a52',
    },
    text: {
      primary: '#eac9ef',
      secondary: 'rgba(234,201,239,0.7)',
      disabled: 'rgba(234,201,239,0.5)',
      hint: 'rgba(234,201,239,0.5)',
    },
    background: {
      default: '#3b0225',
      paper: '#540533',
    },
  },
  typography: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
