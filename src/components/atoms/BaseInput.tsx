import { TextField } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

export type BaseInputProps = {
  label?: string;
  disabled?: boolean;
} & React.ComponentProps<typeof TextField>;

const BaseInput: React.VFC<BaseInputProps> = ({
  variant = 'outlined',
  label = '',
  ...restProps
}) => {
  return <StyledTextField variant={variant} label={label} {...restProps} />;
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
