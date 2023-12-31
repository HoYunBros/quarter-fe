import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6';

import FootNavBar from '.';

const meta: Meta<typeof FootNavBar> = {
  component: FootNavBar,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({}),
  },
};

export default meta;
type Story = StoryObj<typeof FootNavBar>;

export const Primary: Story = {
  args: {},
};
