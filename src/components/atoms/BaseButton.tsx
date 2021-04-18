import React from 'react';

type BaseButtonProps = {
  label: string;
  onClick: () => void;
};

const BaseButton: React.VFC<BaseButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default React.memo(BaseButton);
