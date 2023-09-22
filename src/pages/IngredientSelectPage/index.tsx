import React from 'react';

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
  const { data, isLoading, isError } = useGetIngredients();
  console.info(data, isLoading, isError);
  const { size, ingredientIds } = useUserItem();
  const changeIngredientIds = useChangeIngredientIds();
  const mutation = usePostRecipe();

  console.log(size);
  console.log(ingredientIds);
  console.log(mutation);
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {data && (
        <S.Container>
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
          <S.Footer>
            <FootButton
              onClick={() => {
                mutation.mutate({
                  size: size.value,
                  ingredientIds,
                });
                // if (mutation.isSuccess) {
                //   navigate(`${routes.resultRecommend}`);
                // }
              }}
              disabled={ingredientIds.length === 0}
            >
              결과보기
            </FootButton>
          </S.Footer>
        </S.Container>
      )}
    </>
  );
};

export default IngredientSelectPage;
