import { Button, CircularProgress } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

export type BaseButtonProps = {
  label: string
  onClick: () => void
  isLoading?: boolean
} & React.ComponentProps<typeof Button>

const BaseButton: React.VFC<BaseButtonProps> = ({
  label,
  onClick,
  isLoading = false,
  type = 'button',
  variant = 'contained',
  color = 'primary',
  ...restProps
}) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      variant={variant}
      color={color}
      disabled={isLoading}
      {...restProps}
    >
      {isLoading ? <CircularProgress size={24} /> : <>{label}</>}
    </StyledButton>
  )
}

const StyledButton = styled(Button)`
  && {
    height: 40px;
    min-width: 120px;
  }
`

const memorizedBaseButton = React.memo(BaseButton)
export { memorizedBaseButton as BaseButton }
