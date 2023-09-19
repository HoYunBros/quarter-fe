import type { Meta, StoryObj } from '@storybook/react';

import AuthPage from '.';

const meta: Meta<typeof AuthPage> = {
  component: AuthPage,
};

export default meta;
type Story = StoryObj<typeof AuthPage>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
