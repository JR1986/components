import React from 'react';
import Carousel from '../Carousel';
import data from '../stories.data/testData';

export default {
  title: 'Carousel/Carousel',
  component: Carousel,
};

export const ImageSlider = () => (
  <Carousel
    images={
        data.map((item) => {
          const { imageUrl } = item;
          return (
            <img
              src={imageUrl}
              alt="test"
            />
          );
        })
    }
  />
);
