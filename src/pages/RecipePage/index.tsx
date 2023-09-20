import React from 'react';

import * as S from './RecipePage.styled';
import MainGlobalNavBar from '../../components/common/MainGlobalNavBar';
import FootNavBar from '../../components/common/FootNavBar';

const RecipePage = () => {
  return (
    <S.Container>
      <S.Header>
        <MainGlobalNavBar />
      </S.Header>
      <S.Main>메인 컨텐츠</S.Main>
      <S.Footer>
        <FootNavBar />
      </S.Footer>
    </S.Container>
  );
};

export default RecipePage;
