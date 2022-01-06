import { Meta, Story } from '@storybook/react'
import React from 'react'
import { BaseButton, BaseButtonProps } from './BaseButton'

export default {
  title: 'atoms/BaseButton',
  component: BaseButton,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['contained', 'outlined', 'text'],
      },
    },
    color: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary'],
      },
    },
  },
} as Meta

const Template: Story<BaseButtonProps> = (args) => <BaseButton {...args} />

export const Contained = Template.bind({})
Contained.args = {
  label: 'Contained',
  variant: 'contained',
  color: 'primary',
}

export const Outlined = Template.bind({})
Outlined.args = {
  label: 'Outlined',
  variant: 'outlined',
  color: 'primary',
}

export const Text = Template.bind({})
Text.args = {
  label: 'Text',
  variant: 'text',
  color: 'primary',
}
