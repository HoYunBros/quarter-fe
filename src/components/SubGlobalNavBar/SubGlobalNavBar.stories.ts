import type { Meta, StoryObj } from '@storybook/react';

import SubGlobalNavBar from '.';
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6';

const meta: Meta<typeof SubGlobalNavBar> = {
  component: SubGlobalNavBar,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({}),
  },
};

export default meta;
type Story = StoryObj<typeof SubGlobalNavBar>;

export const Primary: Story = {
  args: {},
};
