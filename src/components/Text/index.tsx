import React from 'react';

import * as S from './Text.styled';

type Props = {
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  color?: string;
  align?: 'left' | 'center' | 'right';
};

const Text = ({ children, size = 'medium', color = 'black', align = 'left' }: Props) => {
  switch (size) {
    case 'small':
      return (
        <S.P $color={color} $align={align}>
          {children}
        </S.P>
      );
    case 'medium':
      return (
        <S.H2 $color={color} $align={align}>
          {children}
        </S.H2>
      );
    case 'large':
      return (
        <S.H1 $color={color} $align={align}>
          {children}
        </S.H1>
      );
    default:
      return <S.H2 $color={color}>{children}</S.H2>;
  }
};

export default Text;
