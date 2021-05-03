import { TextField } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

export type BaseInputProps = {
  variant?: React.ComponentProps<typeof TextField>['variant'];
  label?: string;
  disabled?: boolean;
};

const BaseInput: React.VFC<BaseInputProps> = ({
  variant = 'standard',
  label = '',
  disabled = false,
}) => {
  return <StyledTextField variant={variant} label={label} disabled={disabled} />;
};

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-notchedOutline {
    border-width: 3px;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-width: 3px;
  }
`;

const memorizedBaseInput = React.memo(BaseInput);
export { memorizedBaseInput as BaseInput };
