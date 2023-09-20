import type { Meta, StoryObj } from '@storybook/react';

import MainGlobalNavBar from '.';

const meta: Meta<typeof MainGlobalNavBar> = {
  component: MainGlobalNavBar,
};

export default meta;
type Story = StoryObj<typeof MainGlobalNavBar>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'common',
  },
};
