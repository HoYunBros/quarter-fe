import React from 'react';

import { routes } from '../../router';
import SubGlobalNavBar from '../../components/SubGlobalNavBar';
import FootButton from '../../components/FootButton';
import Text from '../../components/Text';
import { PROGRESS_BAR_WIDTH } from '../../constants';
import * as S from './IngredientSelectPage.styled';

const IngredientSelectPage = () => {
  return (
    <S.Container>
      <S.Header>
        <SubGlobalNavBar backTo={routes.sizePick} progressWidth={PROGRESS_BAR_WIDTH.MIDDLE} />
      </S.Header>
      <S.Main>
        <Text size="large">좋아하는 재료를 선택해주세요</Text>
      </S.Main>
      <S.Footer>
        <FootButton nextTo={routes.resultRecommend}>결과보기</FootButton>
      </S.Footer>
    </S.Container>
  );
};

export default IngredientSelectPage;
