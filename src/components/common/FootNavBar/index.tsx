import React from 'react';
import { useTheme } from 'styled-components';

import { ReactComponent as Home } from '../../../assets/icons/common/home.svg';
import { ReactComponent as User } from '../../../assets/icons/common/user.svg';
import * as S from './FootNavBar.styled';

const FootNavBar = () => {
  const theme = useTheme();
  // TODO: 각 아이콘 클릭 상태에 따라 색상 변경 및 페이지 이동
  return (
    <S.Nav>
      <S.NavItemWrapper>
        <Home fill={theme.colors.primary} />
        <S.NavItemTitle $isClicked={true}>홈</S.NavItemTitle>
      </S.NavItemWrapper>
      <S.NavItemWrapper>
        <User fill={theme.colors.gray_04} />
        <S.NavItemTitle $isClicked={false}>마이</S.NavItemTitle>
      </S.NavItemWrapper>
    </S.Nav>
  );
};

export default FootNavBar;
