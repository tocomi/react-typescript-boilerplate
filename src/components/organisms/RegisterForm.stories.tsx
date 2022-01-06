import { Meta, Story } from '@storybook/react'
import { RegisterForm } from './RegisterForm'

export default {
  title: 'organisms/RegisterForm',
  component: RegisterForm,
} as Meta

const Template: Story = () => <RegisterForm />

export const Form = Template.bind({})
