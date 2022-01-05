import { TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

export type BaseInputProps = { 'aria-label'?: string } & React.ComponentProps<typeof TextField>;

const BaseInput = React.forwardRef<HTMLDivElement, BaseInputProps>(
  ({ 'aria-label': ariaLabel, variant = 'outlined', ...restProps }, ref) => {
    return (
      <StyledTextField
        variant={variant}
        ref={ref}
        inputProps={{ 'aria-label': ariaLabel }}
        {...restProps}
      />
    );
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
