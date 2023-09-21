import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../styles/theme.styled';

const ModeContext = createContext('light');
const ModeChangeContext = createContext((mode: string) => {
  console.log(`현재 ${mode} 모드입니다. 현재 컴포넌트는 Context 범위 밖 입니다.`);
});

export const useMode = () => useContext(ModeContext);
export const useModeChange = () => useContext(ModeChangeContext);

type Props = {
  children: React.ReactNode;
};

const ModeThemeProvider = ({ children }: Props) => {
  const [mode, setMode] = useState('light');
  const handleModeChange = (mode: string) => {
    setMode(mode);
  };
  return (
    <ModeContext.Provider value={mode}>
      <ModeChangeContext.Provider value={handleModeChange}>
        <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>{children}</ThemeProvider>
      </ModeChangeContext.Provider>
    </ModeContext.Provider>
  );
};

export default ModeThemeProvider;
