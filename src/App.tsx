import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ThemeProvider } from 'styled-components';

import ModeThemeProvider from './contexts/ModeContext';
import router from './router';
import { GlobalStyles } from './styles/GlobalStyles.styled';
// import { lightTheme } from './styles/theme.styled';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <ModeThemeProvider>
        <GlobalStyles />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ModeThemeProvider>
    </>
  );
};

export default App;
