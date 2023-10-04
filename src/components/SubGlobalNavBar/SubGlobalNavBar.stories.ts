import type { Meta, StoryObj } from '@storybook/react';

import SubGlobalNavBar from '.';

const meta: Meta<typeof SubGlobalNavBar> = {
  component: SubGlobalNavBar,
};

export default meta;
type Story = StoryObj<typeof SubGlobalNavBar>;

export const Primary: Story = {
  args: {},
};
