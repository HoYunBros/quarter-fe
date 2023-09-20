import type { Meta, StoryObj } from '@storybook/react';

import FootNavBar from '.';

const meta: Meta<typeof FootNavBar> = {
  component: FootNavBar,
};

export default meta;
type Story = StoryObj<typeof FootNavBar>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'common',
  },
};
