import type { Meta, StoryObj } from '@storybook/react';
import MenuList from './MenuList';
import iphones from '../../../mocks/electronics-store.json';

const meta = {
  title: 'Components/Menu/MenuList',
  component: MenuList,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MenuList>;

export default meta;
type Story = StoryObj<typeof MenuList>;

export const Small: Story = {
  args: {
    iphones: iphones,
  },
};
