import React from 'react';
import { useLocation } from 'react-router-dom';

import { useMode } from '../../contexts/ModeContext';
import { ReactComponent as HomeClicked } from '../../assets/icons/common/home_clicked.svg';
import { ReactComponent as HomeNonClickedLight } from '../../assets/icons/common/home_non_clicked_light.svg';
import { ReactComponent as HomeNonClickedDark } from '../../assets/icons/common/home_non_clicked_dark.svg';
import { ReactComponent as UserClicked } from '../../assets/icons/common/user_clicked.svg';
import { ReactComponent as UserNonClickedLight } from '../../assets/icons/common/user_non_clicked_light.svg';
import { ReactComponent as UserNonClickedDark } from '../../assets/icons/common/user_non_clicked_dark.svg';

import * as S from './FootNavBar.styled';

const FootNavBar = () => {
  const mode = useMode();
  // TODO: 각 아이콘 클릭 상태에 따라 색상 변경 및 페이지 이동
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';
  const isUserPage = pathname === '/user';
  const Home = isHomePage
    ? HomeClicked
    : mode === 'light'
    ? HomeNonClickedLight
    : HomeNonClickedDark;
  const User = isUserPage
    ? UserClicked
    : mode === 'light'
    ? UserNonClickedLight
    : UserNonClickedDark;
  return (
    <S.Nav>
      <S.NavItemWrapper>
        <Home />
        <S.NavItemTitle $isClicked={isHomePage}>홈</S.NavItemTitle>
      </S.NavItemWrapper>
      <S.NavItemWrapper>
        <User />
        <S.NavItemTitle $isClicked={isUserPage}>마이</S.NavItemTitle>
      </S.NavItemWrapper>
    </S.Nav>
  );
};

export default FootNavBar;
