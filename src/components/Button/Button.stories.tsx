import { Meta, StoryObj } from '@storybook/react';
import { Button } from "./Button.component";
import { ButtonProps } from './Button.interface';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  argTypes: {}
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};