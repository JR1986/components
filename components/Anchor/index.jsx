import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledAnchor = styled.a`
  text-decoration: none;
`;

const Anchor = ({
  href, target, rel, children,
}) => (
  <StyledAnchor href={href} target={target} rel={rel}>
    {children}
  </StyledAnchor>
);

Anchor.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  children: PropTypes.node,
};

Anchor.defaultProps = {
  href: null,
  target: null,
  rel: null,
  children: null,
};

export default Anchor;
