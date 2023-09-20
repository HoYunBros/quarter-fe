import React from 'react';

import { ReactComponent as LogoCharacter } from '../../../assets/icons/logo/character.svg';
import { ReactComponent as LogoTitle } from '../../../assets/icons/logo/title.svg';
import { ReactComponent as LightMode } from '../../../assets/icons/common/mode_light.svg';
import { ReactComponent as DarkMode } from '../../../assets/icons/common/mode_dark.svg';

import * as S from './MainNavigationBar.styled';

const MainNavigationBar = () => {
  return (
    <S.Nav>
      <S.LogoContainer>
        <LogoCharacter />
        <LogoTitle />
      </S.LogoContainer>
      <S.ModeContainer>
        <LightMode />
        <DarkMode />
      </S.ModeContainer>
    </S.Nav>
  );
};

export default MainNavigationBar;
