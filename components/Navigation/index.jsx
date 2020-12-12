import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '../Typography';

const StyledToolbar = styled(Toolbar)`
  justify-content: flex-end;
`;

const NavigationTypography = styled(Typography)`
  padding: 0 16px;
`;

const Navigation = ({ links }) => (
  <AppBar position="static">
    <StyledToolbar>
      {links}
    </StyledToolbar>
  </AppBar>
);

Navigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.node),
};

Navigation.defaultProps = {
  links: null,
};

export { NavigationTypography, Navigation };
