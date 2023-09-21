import React from 'react';
import { useTheme } from 'styled-components';

import { ReactComponent as LogoCharacter } from '../../assets/icons/logo/character.svg';
import { ReactComponent as LogoTitle } from '../../assets/icons/logo/title.svg';
import { ReactComponent as LightMode } from '../../assets/icons/common/mode_light.svg';
import { ReactComponent as DarkMode } from '../../assets/icons/common/mode_dark.svg';
import * as S from './MainGlobalNavBar.styled';

const MainNavigationBar = () => {
  // TODO: 라이트/다크 모드 전환 기능 구현
  const theme = useTheme();
  return (
    <S.Nav>
      <S.LogoContainer>
        <LogoCharacter />
        <LogoTitle fill={theme.colors.gray_05} />
      </S.LogoContainer>
      <S.ModeContainer>
        <LightMode fill={theme.colors.gray_05} />
        <DarkMode fill={theme.colors.gray_00} />
      </S.ModeContainer>
    </S.Nav>
  );
};

export default MainNavigationBar;
