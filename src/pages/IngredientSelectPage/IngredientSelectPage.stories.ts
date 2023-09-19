import type { Meta, StoryObj } from '@storybook/react';

import IngredientSelectPage from '.';

const meta: Meta<typeof IngredientSelectPage> = {
  component: IngredientSelectPage,
};

export default meta;
type Story = StoryObj<typeof IngredientSelectPage>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
