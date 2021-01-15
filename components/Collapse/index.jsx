import React, { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Button } from '../Button';

const showCollapse = `
  display: block;
`;

const hideCollapse = `
  display: none;
`;

const collapseAnimation = keyframes`
  0%, 50% {
    transform: translateY(-10%);
    opacity: 0%;
  }
  100% {
    transform: translateY(0%);
    opacity: 100%;
  }
`;

const CollapseContent = styled.div`
  margin-top: 16px;
  ${(props) => (props.openCollapse ? showCollapse : hideCollapse)};
  animation: 0.3s ${collapseAnimation} ease;
`;

const Collapse = ({ title, description }) => {
  const [open, handleOpen] = useState(false);

  const handleClick = () => {
    handleOpen(!open);
  };

  return (
    <>
      <Button variant="text" onClick={handleClick}>{title}</Button>
      <CollapseContent openCollapse={open}>{description}</CollapseContent>
    </>
  );
};

export default Collapse;
