import { createTheme } from '@mui/material/styles';

const fontFamily = "'Noto Sans JP', 'Noto Sans'";

export const theme = createTheme({
  typography: {
    fontFamily,
  },
  palette: {
    primary: {
      main: '#0277bd',
    },
    secondary: {
      main: '#ff7f3f',
      contrastText: 'white',
    },
  },
});
