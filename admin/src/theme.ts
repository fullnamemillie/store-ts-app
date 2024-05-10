import { ThemeOptions } from '@mui/material';

export const theme: ThemeOptions = {
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#623e63',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#623e63',
        },
      },
    },
  },
};
