import { TextField } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

export type BaseInputProps = React.ComponentProps<typeof TextField>;

const BaseInput = React.forwardRef<HTMLDivElement, BaseInputProps>(
  ({ variant = 'outlined', ...restProps }, ref) => {
    return <StyledTextField variant={variant} ref={ref} {...restProps} />;
  }
);

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
