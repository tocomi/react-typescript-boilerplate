import { Button } from '@material-ui/core';
import React from 'react';

export type BaseButtonProps = {
  label: string;
  onClick: () => void;
  variant?: React.ComponentProps<typeof Button>['variant'];
  color?: React.ComponentProps<typeof Button>['color'];
};

const BaseButton: React.VFC<BaseButtonProps> = ({
  label,
  onClick,
  variant = 'contained',
  color = 'primary',
}) => {
  return (
    <Button onClick={onClick} variant={variant} color={color}>
      {label}
    </Button>
  );
};

const memorizedBaseButton = React.memo(BaseButton);
export { memorizedBaseButton as BaseButton };
