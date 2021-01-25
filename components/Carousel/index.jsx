import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const Container = styled.div`
    position: relative;
`;

const IconContainer = styled.span`
    position: absolute;
    background-color: white;
    top: 300px;
    ${(props) => (props.left ? 'left: 50px' : null)};
    ${(props) => (props.right ? 'right: 50px' : null)};
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
`;

const Carousel = ({ images }) => {
  const [image, setImage] = useState(0);

  const handleImage = () => {

  };

  return (
    <Container>
      {images.map((image) => (
        <ImageContainer>
          {image}
        </ImageContainer>
      ))}
      <IconContainer left onClick={handleImage}>
        <KeyboardArrowLeftIcon />
      </IconContainer>
      <IconContainer right>
        <KeyboardArrowRightIcon />
      </IconContainer>
    </Container>
  );
};

export default Carousel;
