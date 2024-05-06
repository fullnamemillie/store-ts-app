import type { Meta, StoryObj } from '@storybook/react';
import ContactDetails from './ContactDetails';

const meta = {
  title: 'Components/ContactDetails/ContactDetails',
  component: ContactDetails,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ContactDetails>;

export default meta;
type Story = StoryObj<typeof ContactDetails>;

export const Small: Story = {
  args: {
    href: 'tel:+0015555555555',
    children: '555 555 55 55',
  },
};
