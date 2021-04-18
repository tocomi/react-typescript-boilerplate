import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

type BaseButtonProps = {
  label: string;
  onClick: () => void;
  width: number;
};

const BaseButton: React.VFC<BaseButtonProps> = ({ label, onClick, width }) => {
  return (
    <StyledButton width={width} variant="contained" onClick={onClick}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled(Button)<{ width: number }>`
  width: ${(props) => props.width}px;
`;

export default React.memo(BaseButton);
