import { Meta, Story } from '@storybook/react'
import { useCallback, useState } from 'react'
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
    isLoading: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta

const Template: Story<BaseButtonProps> = (args) => {
  const [isLoading, setIsLoading] = useState(false)
  const onClick = useCallback(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  return <BaseButton {...args} onClick={onClick} isLoading={isLoading} />
}

export const Contained = Template.bind({})
Contained.args = {
  label: 'Contained',
  variant: 'contained',
  color: 'primary',
  isLoading: false,
}

export const Outlined = Template.bind({})
Outlined.args = {
  label: 'Outlined',
  variant: 'outlined',
  color: 'primary',
  isLoading: false,
}

export const Text = Template.bind({})
Text.args = {
  label: 'Text',
  variant: 'text',
  color: 'primary',
  isLoading: false,
}
