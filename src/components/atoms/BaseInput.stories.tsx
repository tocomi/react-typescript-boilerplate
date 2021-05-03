import { Meta, Story } from '@storybook/react';
import { BaseInput, BaseInputProps } from './BaseInput';

export default {
  title: 'atoms/BaseInput',
  component: BaseInput,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['standard', 'outlined', 'filled'],
      },
    },
  },
} as Meta;

const Template: Story<BaseInputProps> = (args) => <BaseInput {...args} />;

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'outlined',
  variant: 'outlined',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'disabled',
  disabled: true,
};

export const Standard = Template.bind({});
Standard.args = {
  label: 'standard',
  variant: 'standard',
};

export const Filled = Template.bind({});
Filled.args = {
  label: 'filled',
  variant: 'filled',
};
