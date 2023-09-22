import React from 'react';

import * as S from './FootButton.styled';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  nextTo: string;
  disabled?: boolean;
};

const FootButton = ({ children, nextTo, disabled = true }: Props) => {
  const navigate = useNavigate();
  return (
    <S.Button
      onClick={() => {
        navigate(nextTo);
      }}
      disabled={disabled}
      $disabled={disabled}
    >
      {children}
    </S.Button>
  );
};

export default FootButton;
