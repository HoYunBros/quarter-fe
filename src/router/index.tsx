import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import HomePage from '../pages/RecipePage';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default router;
