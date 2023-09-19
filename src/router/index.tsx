import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import HomePage from '../pages/RecipePage';
import AuthPage from '../pages/AuthPage';
import SizePickPage from '../pages/SizePickPage';
import IngredientSelectPage from '../pages/IngredientSelectPage';
import ResultRecommendPage from '../pages/ResultRecommendPage';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
  {
    path: '/sizePick',
    element: <SizePickPage />,
  },
  {
    path: '/ingredientSelect',
    element: <IngredientSelectPage />,
  },
  {
    path: '/resultRecommend',
    element: <ResultRecommendPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default router;
