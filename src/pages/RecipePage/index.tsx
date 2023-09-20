import React from 'react';

import * as S from './RecipePage.styled';
import MainNavigationBar from '../../components/RecipePage/MainNavigationBar';

const RecipePage = () => {
  return (
    <S.Container>
      <S.Header>
        <MainNavigationBar />
      </S.Header>
    </S.Container>
  );
};

export default RecipePage;
