import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import router from './router';
import { GlobalStyles } from './styles/GlobalStyles.styled';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
};

export default App;
