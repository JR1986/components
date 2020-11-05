import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1D3557',
    },
    secondary: {
      main: '#E63946',
    }
  },
});

export default function Theme({children}) {
  return (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  );
}
