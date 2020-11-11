import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { bodyFont, headingFont } from './fonts';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1D3557',
    },
    secondary: {
      main: '#E63946',
    },
  },
  typography: {
    body1: {
      fontFamily: bodyFont,
    },
    body2: {
      fontFamily: bodyFont,
    },
    heading1: {
      fontFamily: headingFont,
    },
    heading2: {
      fontFamily: headingFont,
    },
    heading3: {
      fontFamily: headingFont,
    },
    heading4: {
      fontFamily: headingFont,
    },
    heading5: {
      fontFamily: headingFont,
    },
    heading6: {
      fontFamily: headingFont,
    },
  },
});

export default function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

Theme.propTypes = {
  children: PropTypes.node,
};

Theme.defaultProps = {
  children: null,
};
