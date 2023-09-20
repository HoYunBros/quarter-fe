import type { Meta, StoryObj } from '@storybook/react';

import MainNavigationBar from '.';

const meta: Meta<typeof MainNavigationBar> = {
  component: MainNavigationBar,
};

export default meta;
type Story = StoryObj<typeof MainNavigationBar>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'RecipePage',
  },
};
