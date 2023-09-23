import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import router from './router';
import { UserItemProvider } from './contexts/UserItemContext';
import ModeThemeProvider from './contexts/ModeContext';
import { GlobalStyles } from './styles/GlobalStyles.styled';
import { ErrorBoundary } from './pages/ErrorPage/ErrorBoundary';
import ErrorPage from './pages/ErrorPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <ErrorBoundary fallback={<ErrorPage />}>
        <ModeThemeProvider>
          <GlobalStyles />
          <QueryClientProvider client={queryClient}>
            <UserItemProvider>
              <RouterProvider router={router} />
            </UserItemProvider>
          </QueryClientProvider>
        </ModeThemeProvider>
      </ErrorBoundary>
    </>
  );
};

export default App;
