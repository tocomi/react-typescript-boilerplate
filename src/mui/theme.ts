import { createTheme } from '@mui/material/styles';

const fontFamily = "'Noto Sans JP', 'Noto Sans'";

export const theme = createTheme({
  typography: {
    fontFamily,
  },
  palette: {
    primary: {
      light: '#58a5f0',
      main: '#0277bd',
      dark: '#004c8c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffc947',
      main: '#ff9800',
      dark: '#c66900',
      contrastText: '#000',
    },
  },
});
