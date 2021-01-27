import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const Container = styled.div`
    position: relative;
`;

const IconContainer = styled.span`
    background-color: white;
    cursor: pointer;
    ${(props) => (props.left ? 'left: 50px' : null)};
    ${(props) => (props.right ? 'right: 50px' : null)};
`;

const ImageContainer = styled.div`
    text-align: center;
`;

const Carousel = ({ images }) => {
  const [active, setActive] = useState(0);

  const handleRight = () => {
    setActive(active === images.length - 1 ? 0 : active + 1);
  };

  const handleLeft = () => {
    setActive(active === 0 ? images.length - 1 : active - 1);
  };

  return (
    <Container>
      <ImageContainer>
        {images[active]}
      </ImageContainer>
      <IconContainer onClick={handleLeft}>
        <KeyboardArrowLeftIcon />
      </IconContainer>
      <IconContainer>
        <KeyboardArrowRightIcon onClick={handleRight} />
      </IconContainer>
    </Container>
  );
};

export default Carousel;
