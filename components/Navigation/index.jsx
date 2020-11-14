import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box clone m={2}>
          <Typography variant="h6">
            Home
          </Typography>
        </Box>
        <Box clone m={2}>
          <Typography variant="h6">
            About
          </Typography>
        </Box>
        <Box clone m={2}>
          <Typography variant="h6">
            Services
          </Typography>
        </Box>
        <Box clone m={2}>
          <Typography variant="h6">
            Contact
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
