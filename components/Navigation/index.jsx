import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '../Button';
import Typography from '../Typography';
import Drawer from '../Drawer';

const StyledToolbar = styled(Toolbar)`
  justify-content: flex-end;
`;

const NavigationTypography = styled(Typography)`
  padding: 0 16px;
`;

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    background-color: ${(props) => props.drawerColor};
  }
`;

const Navigation = ({ links, drawerColor }) => {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <AppBar position="static">
      <StyledToolbar>
        <IconButton
          onClick={handleDrawer}
          color="#fff"
        >
          <MenuIcon />
        </IconButton>
        <StyledDrawer open={open} onClose={handleClose} drawerColor={drawerColor}>
          {links}
        </StyledDrawer>
        {links}
      </StyledToolbar>
    </AppBar>
  );
};

Navigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.node),
  drawerColor: PropTypes.string,
};

Navigation.defaultProps = {
  links: null,
  drawerColor: '#000',
};

export { NavigationTypography, Navigation };
