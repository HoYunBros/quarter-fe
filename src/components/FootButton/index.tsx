import React from 'react';

import * as S from './FootButton.styled';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

const FootButton = ({ children, onClick, disabled = true }: Props) => {
  return (
    <S.Button
      onClick={() => {
        onClick();
      }}
      disabled={disabled}
      $disabled={disabled}
    >
      {children}
    </S.Button>
  );
};

export default FootButton;
