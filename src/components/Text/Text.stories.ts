import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6';

import Text from '.';

const meta: Meta<typeof Text> = {
  component: Text,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({}),
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};
