import React from 'react';

import { Recipe } from '../../services/useGetRecipe';
import { useTheme } from 'styled-components';
import Text from '../Text';
import { ReactComponent as BookmarkUnSaved } from '../../assets/icons/common/bookmark_unsaved.svg';
// import { ReactComponent as BookmarkSaved } from '../../assets/icons/common/bookmark_saved.svg';
import * as S from './RecipeCard.styled';

type Props = {
  recipeName: Recipe['recipeName'];
  flavors: Recipe['flavors'];
  onClick?: () => void;
  hasBookmark?: boolean;
};

const RecipeCard = ({ recipeName, flavors, onClick = () => {}, hasBookmark }: Props) => {
  const theme = useTheme();
  const recipeNameSplitLength = recipeName.split(' ').length;
  const flavorsLength = flavors.length;
  const flavorsFirstRow = flavors.slice(0, 2);
  const flavorsSecondRow = flavors.slice(2, 4);
  const flavorsThirdRow = flavors.slice(4, 6);
  return (
    <S.CardWrapper
      onClick={() => {
        onClick();
      }}
    >
      <S.UpperWrapper $hasPaddingTop={!hasBookmark}>
        {hasBookmark && (
          <S.BookmarkWrapper>
            <BookmarkUnSaved
              fill={theme.colors.gray_05}
              onClick={() => {
                alert('곧 추가될 예정이에요!');
              }}
              style={{ cursor: 'pointer' }}
            />
          </S.BookmarkWrapper>
        )}
        <S.TextWrapper>
          <Text size="large" align="center">
            {recipeName.split(' ').slice(0, 2).join(' ')}
          </Text>
          <Text size="large" align="center">
            {recipeName.split(' ').slice(2, recipeNameSplitLength).join(' ')}
          </Text>
          <S.DescriptionWrapper>
            <Text size="small">
              {flavorsFirstRow.map(flavor => flavor.flavorName).join('+')}
              {flavorsLength >= 3 && '+'}
            </Text>
            <Text size="small">
              {flavorsSecondRow.map(flavor => flavor.flavorName).join('+')}
              {flavorsLength >= 5 && '+'}
            </Text>
            <Text size="small">{flavorsThirdRow.map(flavor => flavor.flavorName).join('+')}</Text>
          </S.DescriptionWrapper>
        </S.TextWrapper>
      </S.UpperWrapper>
      <S.ImageWrapper $flavorsCount={flavors.length}>
        {flavors?.map((flavor, index) => <S.Image key={index} src={flavor.imageUrl} />)}
      </S.ImageWrapper>
    </S.CardWrapper>
  );
};

export default RecipeCard;
