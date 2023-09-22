import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { routes } from '../../router';
import SubGlobalNavBar from '../../components/SubGlobalNavBar';
import FootButton from '../../components/FootButton';
import Text from '../../components/Text';
import { PROGRESS_BAR_WIDTH } from '../../constants';
import * as S from './ResultRecommendPage.styled';

const ResultRecommendPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // TODO: id로 Get 요청 보내서 결과 렌더링하기
  console.log(id);

  return (
    <S.Container>
      <S.Header>
        <SubGlobalNavBar backTo={routes.ingredientSelect} progressWidth={PROGRESS_BAR_WIDTH.END} />
      </S.Header>
      <S.Main>
        <Text size="large">나만의 꿀조합을 찾았어요!</Text>
      </S.Main>
      <S.Footer>
        <FootButton
          onClick={() => {
            navigate(routes.sizePick);
          }}
        >
          다시하기
        </FootButton>
      </S.Footer>
    </S.Container>
  );
};

export default ResultRecommendPage;
