import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Grid from '../Grid';

const StyledFooter = styled.footer`
  padding: 32px 16px;
  background-color: black;

  @media (min-width: 600px) {
    padding: 32px 48px;   
  }
`;

const Footer = ({ children }) => (
  <StyledFooter>
    <Grid container>
      {children}
    </Grid>
  </StyledFooter>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
