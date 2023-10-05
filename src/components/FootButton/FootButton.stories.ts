import type { Meta, StoryObj } from '@storybook/react';

import FootButton from '.';

const meta: Meta<typeof FootButton> = {
  component: FootButton,
};

export default meta;
type Story = StoryObj<typeof FootButton>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};
