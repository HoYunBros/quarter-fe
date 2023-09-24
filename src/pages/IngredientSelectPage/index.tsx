import React from 'react';
import { useNavigate } from 'react-router-dom';

import { routes } from '../../router';
import SubGlobalNavBar from '../../components/SubGlobalNavBar';
import FootButton from '../../components/FootButton';
import Text from '../../components/Text';
import { PROGRESS_BAR_WIDTH } from '../../constants';
import * as S from './IngredientSelectPage.styled';

import { useGetIngredients } from '../../services/useGetIngredients';
import { usePostRecipe } from '../../services/usePostRecipe';
import { useUserItem, useChangeIngredientIds } from '../../contexts/UserItemContext';

const IngredientSelectPage = () => {
  const { data, isLoading } = useGetIngredients();
  const { size, ingredientIds } = useUserItem();
  const changeIngredientIds = useChangeIngredientIds();
  const mutation = usePostRecipe();

  const allFlavorIdList = ingredientIds
    .map(id => {
      const flavorIdList = data?.ingredients?.find(ingredient => ingredient.id === id)
        ?.flavorIdList;
      return flavorIdList;
    })
    .flat();
  const flavorIdList = allFlavorIdList.filter(
    (item, index) => allFlavorIdList.indexOf(item) === index,
  );
  const isAbleToRecommend = flavorIdList.length >= size.value;
  const navigate = useNavigate();
  if (size.id === -1) {
    navigate(routes.sizePick);
  }
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {data && (
        <S.Container>
          <S.UpperContainer>
            <S.Header>
              <SubGlobalNavBar backTo={routes.sizePick} progressWidth={PROGRESS_BAR_WIDTH.MIDDLE} />
            </S.Header>
            <S.Main>
              <Text size="large">좋아하는 재료를 선택해주세요</Text>
              <S.IngredientsContainer>
                {data?.ingredients?.map(ingredient => (
                  <S.IngredientWrapper
                    key={ingredient.id}
                    onClick={() => {
                      if (ingredientIds.includes(ingredient.id)) {
                        changeIngredientIds(ingredientIds.filter(id => id !== ingredient.id));
                      } else {
                        changeIngredientIds([...ingredientIds, ingredient.id]);
                      }
                    }}
                  >
                    <S.IngredientImage
                      src={ingredient.imageUrl}
                      alt={ingredient.name}
                      $isClicked={ingredientIds.includes(ingredient.id)}
                    />
                    <S.IngredientName>{ingredient.name}</S.IngredientName>
                  </S.IngredientWrapper>
                ))}
              </S.IngredientsContainer>
            </S.Main>
          </S.UpperContainer>
          <S.Footer>
            <S.BottomContainer>
              {isAbleToRecommend || ingredientIds.length === 0 || (
                <Text size="small">재료를 조금 더 골라볼까요?</Text>
              )}
              <FootButton
                onClick={() => {
                  mutation.mutate({
                    sizeId: size.id,
                    ingredientIds,
                  });
                }}
                disabled={!isAbleToRecommend}
              >
                결과보기
              </FootButton>
            </S.BottomContainer>
          </S.Footer>
        </S.Container>
      )}
    </>
  );
};

export default IngredientSelectPage;
