import { Meta, StoryObj } from '@storybook/react';
import { Text } from "./Text.component";
import { TextProps } from './Text.interface';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Small',
    size: 'sm'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Medium: StoryObj<TextProps> = {
  args: {
    children: 'Medium',
    size: 'md'
  }
};

export const Large: StoryObj<TextProps> = {
  args: {
    children: 'Large',
    size: 'lg'
  }
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>CustomComponent</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
};