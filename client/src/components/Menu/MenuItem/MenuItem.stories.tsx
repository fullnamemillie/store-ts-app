import type { Meta, StoryObj } from '@storybook/react';
import MenuItem from './MenuItem';

const meta = {
  title: 'Components/Menu/MenuItem',
  component: MenuItem,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    imagePath: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    price: { control: 'number' },
  },
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Small: Story = {
  args: {
    imagePath: '/assets/iphones/iphone-15-black.jpg',
    title: 'iPhone 15',
    description: 'A total powerhouse.',
    price: 799,
  },
};
