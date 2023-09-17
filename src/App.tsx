import React from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './router';
import { GlobalStyles } from './styles/GlobalStyles.styled';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
