import React from 'react';

import * as S from './FootButton.styled';

type Props = {
  children: React.ReactNode;
  nextTo: string;
};

const FootButton = ({ children, nextTo }: Props) => {
  return <S.Button to={nextTo}>{children}</S.Button>;
};

export default FootButton;
