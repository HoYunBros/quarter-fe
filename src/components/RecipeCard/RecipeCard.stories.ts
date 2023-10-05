import type { Meta, StoryObj } from '@storybook/react';

import RecipeCard from '.';

const meta: Meta<typeof RecipeCard> = {
  component: RecipeCard,
};

export default meta;
type Story = StoryObj<typeof RecipeCard>;

const flavors = [
  {
    id: 1,
    flavorName: 'Flavor 1',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    id: 2,
    flavorName: 'Flavor 2',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    id: 3,
    flavorName: 'Flavor 3',
    imageUrl: 'https://via.placeholder.com/50',
  },
];

export const Primary: Story = {
  args: {
    recipeName: 'Recipe Name',
    flavors,
  },
};
