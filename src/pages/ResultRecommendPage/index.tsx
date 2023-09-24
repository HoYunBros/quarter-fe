import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { routes } from '../../router';
import SubGlobalNavBar from '../../components/SubGlobalNavBar';
import FootButton from '../../components/FootButton';
import Text from '../../components/Text';
import { PROGRESS_BAR_WIDTH } from '../../constants';
import { useGetRecipe } from '../../services/useGetRecipe';
import RecipeCard from '../../components/RecipeCard';
import { useInitUserItem } from '../../contexts/UserItemContext';
import LoadingPage from '../LoadingPage';
import * as S from './ResultRecommendPage.styled';

const ResultRecommendPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const idNumber = +(id as string);
  if (isNaN(idNumber)) {
    throw new Error('id가 숫자가 아닙니다.');
  }
  const { data, isLoading } = useGetRecipe(idNumber);
  const initUserItem = useInitUserItem();

  return (
    <>
      {isLoading && <LoadingPage />}
      {data && (
        <S.Container>
          <S.UpperContainer>
            <S.Header>
              <SubGlobalNavBar
                backTo={routes.ingredientSelect}
                progressWidth={PROGRESS_BAR_WIDTH.END}
              />
            </S.Header>
            <S.Main>
              <S.TextWrapper>
                <Text size="large">나만의 꿀조합을 찾았어요!</Text>
              </S.TextWrapper>
              <RecipeCard {...data.recipe} hasBookmark={true} />
            </S.Main>
          </S.UpperContainer>
          <S.Footer>
            <FootButton
              onClick={() => {
                initUserItem();
                navigate(routes.sizePick);
              }}
              disabled={false}
            >
              다시하기
            </FootButton>
          </S.Footer>
        </S.Container>
      )}
    </>
  );
};

export default ResultRecommendPage;
