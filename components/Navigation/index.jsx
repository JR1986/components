import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const StyledToolbar = styled(Toolbar)`
  justify-content: flex-end;
`;

const StyledTypography = styled(Typography)`
  padding: 0 16px;
`;

export default function Navigation({ links }) {
  return (
    <AppBar position="static">
      <StyledToolbar>
        {links.map((link) => (
          <StyledTypography variant="h6">
            {link}
          </StyledTypography>
        ))}
      </StyledToolbar>
    </AppBar>
  );
}

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.node,
    }),
  ),
};

Navigation.defaultProps = {
  links: null,
};
