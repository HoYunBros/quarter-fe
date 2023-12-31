import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import HomePage from '../pages/RecipePage';
import AuthPage from '../pages/AuthPage';
import SizePickPage from '../pages/SizePickPage';
import IngredientSelectPage from '../pages/IngredientSelectPage';
import ResultRecommendPage from '../pages/ResultRecommendPage';
import UserPage from '../pages/UserPage';
import ErrorPage from '../pages/ErrorPage';

export const routes = {
  home: '/',
  auth: '/auth',
  sizePick: '/sizePick',
  ingredientSelect: '/ingredientSelect',
  resultRecommend: '/resultRecommend',
  user: '/user',
};

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <HomePage />,
  },
  {
    path: routes.auth,
    element: <AuthPage />,
  },
  {
    path: routes.sizePick,
    element: <SizePickPage />,
  },
  {
    path: routes.ingredientSelect,
    element: <IngredientSelectPage />,
  },
  {
    path: `${routes.resultRecommend}/:id`,
    element: <ResultRecommendPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: routes.user,
    element: <UserPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default router;
