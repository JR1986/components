import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f4f4f4',
    },
  },
});

export default function Theme({children}) {
  return (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  );
}
