import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import { Button } from '../Button';

const showCollapse = `
  max-height: 600px;
  transition: max-height 280ms ease-in;
`;

const hideCollapse = `
  max-height: 0;
  transition: max-height 180ms ease-out;
`;

const CollapseContent = styled.div`
  margin-top: 16px;
  overflow: hidden;
  ${(props) => (props.openCollapse ? showCollapse : hideCollapse)};
`;

const StyledButton = styled(Button)`
  .MuiButton-label {
    justify-content: space-between;
  }
`;

const Collapse = ({ title, description }) => {
  const [open, handleOpen] = useState(false);

  const handleClick = () => {
    handleOpen(!open);
  };

  return (
    <>
      <StyledButton
        fullWidth
        variant="text"
        onClick={handleClick}
        endIcon={open ? <ExpandMore /> : <ExpandLess />}
      >
        <span>{title}</span>
      </StyledButton>
      <CollapseContent openCollapse={open}>{description}</CollapseContent>
    </>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Collapse;
