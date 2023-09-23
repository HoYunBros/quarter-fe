import React from 'react';

import { Recipe as Props } from '../../services/useGetRecipe';
import { useTheme } from 'styled-components';
import Text from '../Text';
import { ReactComponent as BookmarkUnSaved } from '../../assets/icons/common/bookmark_unsaved.svg';
// import { ReactComponent as BookmarkSaved } from '../../assets/icons/common/bookmark_saved.svg';
import * as S from './RecipeCard.styled';

const RecipeCard = ({ recipeName, flavors, id }: Props) => {
  console.log('⭐️ recipeId: ', id);
  const theme = useTheme();

  return (
    <S.CardWrapper>
      <S.UpperWrapper>
        <S.BookmarkWrapper>
          <BookmarkUnSaved
            fill={theme.colors.gray_05}
            onClick={() => {
              alert('곧 추가될 예정이에요!');
            }}
            style={{ cursor: 'pointer' }}
          />
        </S.BookmarkWrapper>
        <Text size="large">{recipeName}</Text>
        <S.DescriptionWrapper>
          <Text size="small">{flavors?.map(flavor => flavor.flavorName).join(' + ')}</Text>
        </S.DescriptionWrapper>
      </S.UpperWrapper>
      <S.ImageWrapper $flavorsCount={flavors.length}>
        {flavors?.map((flavor, index) => <S.Image key={index} src={flavor.imageUrl} />)}
      </S.ImageWrapper>
    </S.CardWrapper>
  );
};

export default RecipeCard;
