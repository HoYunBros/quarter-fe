import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import router from './router';
import { UserItemProvider } from './contexts/UserItemContext';
import ModeThemeProvider from './contexts/ModeContext';
import { GlobalStyles } from './styles/GlobalStyles.styled';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <ModeThemeProvider>
        <GlobalStyles />
        <QueryClientProvider client={queryClient}>
          <UserItemProvider>
            <RouterProvider router={router} />
          </UserItemProvider>
        </QueryClientProvider>
      </ModeThemeProvider>
    </>
  );
};

export default App;
