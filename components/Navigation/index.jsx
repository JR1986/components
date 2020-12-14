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
  && {
    display: none;

    @media (min-width: 840px) {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
  }
`;

const NavigationTypography = styled(Typography)`
  && {
    padding: 24px;
    text-align: center;

    @media (min-width: 840px) {
      padding: 0 16px;
    }
  }
`;

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    background-color: ${(props) => props.drawerColor};
    min-width: 230px;
  }

  @media (min-width: 840px) {
    display: none;
  }
`;

const StyledAppBar = styled(AppBar)`
  && {
    display: flex;
    flex-direction: row;
  }
`;

const Navigation = ({ links, drawerColor }) => {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <StyledAppBar position="static">
      <IconButton
        onClick={handleDrawer}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <StyledToolbar>
        <StyledDrawer open={open} onClose={handleClose} drawerColor={drawerColor}>
          {links}
        </StyledDrawer>
        {links}
      </StyledToolbar>
    </StyledAppBar>
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
