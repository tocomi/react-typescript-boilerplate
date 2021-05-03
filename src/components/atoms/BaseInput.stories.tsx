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

export const Default = Template.bind({});
Default.args = {
  label: 'default',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'disabled',
  disabled: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'outlined',
  variant: 'outlined',
};
