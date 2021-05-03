import { Button } from '@material-ui/core';
import React from 'react';

export type BaseButtonProps = {
  label: string;
  onClick: () => void;
  type?: React.ComponentProps<typeof Button>['type'];
  variant?: React.ComponentProps<typeof Button>['variant'];
  color?: React.ComponentProps<typeof Button>['color'];
} & React.ComponentProps<typeof Button>;

const BaseButton: React.VFC<BaseButtonProps> = ({
  label,
  onClick,
  type = 'button',
  variant = 'contained',
  color = 'primary',
}) => {
  return (
    <Button onClick={onClick} type={type} variant={variant} color={color}>
      {label}
    </Button>
  );
};

const memorizedBaseButton = React.memo(BaseButton);
export { memorizedBaseButton as BaseButton };
