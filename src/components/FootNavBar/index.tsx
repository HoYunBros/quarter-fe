import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  return (
    <S.Nav>
      <S.NavItemWrapper
        onClick={() => {
          navigate('/');
        }}
      >
        <Home />
        <S.NavItemTitle $isClicked={isHomePage}>홈</S.NavItemTitle>
      </S.NavItemWrapper>
      <S.NavItemWrapper
        onClick={() => {
          navigate('/user');
        }}
      >
        <User />
        <S.NavItemTitle $isClicked={isUserPage}>마이</S.NavItemTitle>
      </S.NavItemWrapper>
    </S.Nav>
  );
};

export default FootNavBar;
