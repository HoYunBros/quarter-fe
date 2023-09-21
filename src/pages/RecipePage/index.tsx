import React from 'react';

import { routes } from '../../router';
import MainGlobalNavBar from '../../components/MainGlobalNavBar';
import FootNavBar from '../../components/FootNavBar';
import { ReactComponent as Card } from '../../assets/icons/cardColor/card1.svg';
import * as S from './RecipePage.styled';

const RecipePage = () => {
  return (
    <S.Container>
      <S.Header>
        <MainGlobalNavBar />
      </S.Header>
      <S.Main>
        <Card />
        <S.LinkButton to={routes.sizePick}>꿀조합 찾기</S.LinkButton>
      </S.Main>
      <S.Footer>
        <FootNavBar />
      </S.Footer>
    </S.Container>
  );
};

export default RecipePage;
