import React from 'react';
import { useTheme } from 'styled-components';

import { ReactComponent as LogoCharacter } from '../../assets/icons/logo/character.svg';
import { ReactComponent as LogoTitle } from '../../assets/icons/logo/title.svg';
import { ReactComponent as LightMode } from '../../assets/icons/common/mode_light.svg';
import { ReactComponent as DarkMode } from '../../assets/icons/common/mode_dark.svg';
import { useMode, useModeChange } from '../../contexts/ModeContext';
import * as S from './MainGlobalNavBar.styled';

const MainNavigationBar = () => {
  const theme = useTheme();
  const mode = useMode();
  const handleModeChange = useModeChange();
  return (
    <S.Nav>
      <S.LogoContainer>
        <LogoCharacter />
        <LogoTitle fill={theme.colors.gray_05} />
      </S.LogoContainer>
      <S.ModeContainer>
        <S.ModeButton
          $isActive={mode === 'light'}
          onClick={() => {
            handleModeChange('light');
          }}
        >
          <LightMode fill={theme.colors.gray_05} />
        </S.ModeButton>
        <S.ModeButton
          $isActive={mode === 'dark'}
          onClick={() => {
            handleModeChange('dark');
          }}
        >
          <DarkMode fill={theme.colors.black} />
        </S.ModeButton>
      </S.ModeContainer>
    </S.Nav>
  );
};

export default MainNavigationBar;
