import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text/Text.component';
import { Checkbox } from "./Checkbox.component";
import { CheckboxProps } from './Checkbox.interface';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className='flex items-center gap-2'>
          {Story()}
          <Text>Lembrar-me de mim por 30 dias</Text>
        </div>
      )
    }
  ]
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};