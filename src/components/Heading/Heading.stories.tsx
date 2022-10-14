import { Meta, StoryObj } from '@storybook/react';
import { Heading } from "./Heading.component";
import { HeadingProps } from './Heading.interface';

export default {
  title: 'Components/Heading',
  component: Heading,
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
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const Medium: StoryObj<HeadingProps> = {
  args: {
    children: 'Medium',
    size: 'md'
  }
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    children: 'Large',
    size: 'lg'
  }
};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>CustomComponent</h1>
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