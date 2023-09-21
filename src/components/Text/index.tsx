import React from 'react';

import * as S from './Text.styled';

type Props = {
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
};

const Text = ({ children, size = 'medium' }: Props) => {
  switch (size) {
    case 'small':
      return <S.P>{children}</S.P>;
    case 'medium':
      return <S.H2>{children}</S.H2>;
    case 'large':
      return <S.H1>{children}</S.H1>;
    default:
      return <S.H2>{children}</S.H2>;
  }
};

export default Text;
