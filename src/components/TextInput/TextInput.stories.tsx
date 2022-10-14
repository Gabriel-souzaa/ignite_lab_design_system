import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import { TextInput } from "./TextInput.component";
import { TextInputRootProps } from './TextInput.interface';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon><Envelope /></TextInput.Icon>,
      <TextInput.Input placeholder='E-mail'></TextInput.Input>
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder='WithoutIcon'></TextInput.Input>
  }
};