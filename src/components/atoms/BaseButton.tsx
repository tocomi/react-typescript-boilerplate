import { Button } from '@mui/material'
import React from 'react'

export type BaseButtonProps = {
  label: string
  onClick: () => void
} & React.ComponentProps<typeof Button>

const BaseButton: React.VFC<BaseButtonProps> = ({
  label,
  onClick,
  type = 'button',
  variant = 'contained',
  color = 'primary',
  ...restProps
}) => {
  return (
    <Button onClick={onClick} type={type} variant={variant} color={color} {...restProps}>
      {label}
    </Button>
  )
}

const memorizedBaseButton = React.memo(BaseButton)
export { memorizedBaseButton as BaseButton }
