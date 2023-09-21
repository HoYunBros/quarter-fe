import React from 'react';

import { routes } from '../../router';
import SubGlobalNavBar from '../../components/SubGlobalNavBar';
import FootButton from '../../components/FootButton';
import Text from '../../components/Text';
import { PROGRESS_BAR_WIDTH } from '../../constants';
import * as S from './ResultRecommendPage.styled';

const ResultRecommendPage = () => {
  return (
    <S.Container>
      <S.Header>
        <SubGlobalNavBar backTo={routes.ingredientSelect} progressWidth={PROGRESS_BAR_WIDTH.END} />
      </S.Header>
      <S.Main>
        <Text size="large">나만의 꿀조합을 찾았어요!</Text>
      </S.Main>
      <S.Footer>
        <FootButton nextTo={routes.sizePick}>다시하기</FootButton>
      </S.Footer>
    </S.Container>
  );
};

export default ResultRecommendPage;
