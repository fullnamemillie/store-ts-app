import type { Meta, StoryFn } from '@storybook/react';
import CloudinaryInputUi, {
  CloudinaryInputUiProps,
} from '@/components/Cloudinary/CloudinaryInputUi/CloudinaryInputUi';
import { ThemeProvider } from 'react-admin';

const meta: Meta = {
  title: 'Components/Cloudinary/CloudinaryInputUi',
  component: CloudinaryInputUi,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
};

export default meta;

export const Small: StoryFn<CloudinaryInputUiProps> = (
  args: CloudinaryInputUiProps
) => (
  <ThemeProvider>
    <CloudinaryInputUi {...args} />
  </ThemeProvider>
);
Small.args = {
  label: 'Main Image',
};
