import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6';

import Carousel from '.';

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({}),
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const images = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
];

export const Primary: Story = {
  args: {
    children: (
      <>
        {images.map((image, index) => (
          <Carousel.Slide key={index} isCurrentSlide={true}>
            <img src={image} alt={`carousel-${index}`} onClick={() => {}} />
          </Carousel.Slide>
        ))}
      </>
    ),
    changeSlide: () => {},
  },
};
