import React, { useState } from 'react';

import { routes } from '../../router';
import MainGlobalNavBar from '../../components/MainGlobalNavBar';
import FootNavBar from '../../components/FootNavBar';

import * as S from './RecipePage.styled';
import Carousel from '../../components/Carousel';
import { useGetRecommendations } from '../../services/useGetRecommendations';
import RecipeCard from '../../components/RecipeCard';

const RecipePage = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const changeSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };
  const { data } = useGetRecommendations();
  const [clickedCardIndexList, setClickedCardIndexList] = useState<number[]>([]);
  return (
    <>
      {data && (
        <S.Container>
          <S.Header>
            <MainGlobalNavBar />
          </S.Header>
          <S.Main>
            <Carousel currentSlideIndex={currentSlideIndex} changeSlide={changeSlide}>
              {data?.recommendations?.map((recommendation, index) => {
                return clickedCardIndexList.includes(index) ? (
                  <Carousel.Slide key={index} isCurrentSlide={index === currentSlideIndex}>
                    <RecipeCard
                      {...recommendation.recipe}
                      onClick={() => {
                        setClickedCardIndexList(
                          clickedCardIndexList.filter(
                            clickedCardIndex => clickedCardIndex !== index,
                          ),
                        );
                      }}
                    />
                  </Carousel.Slide>
                ) : (
                  <Carousel.Slide key={index} isCurrentSlide={index === currentSlideIndex}>
                    <img
                      src={recommendation.cover.imageUrl}
                      alt={`carousel-${index}`}
                      onClick={() => {
                        setClickedCardIndexList([...clickedCardIndexList, index]);
                      }}
                    />
                  </Carousel.Slide>
                );
              })}
            </Carousel>
            <S.LinkButton to={routes.sizePick}>꿀조합 찾기</S.LinkButton>
          </S.Main>
          <S.Footer>
            <FootNavBar />
          </S.Footer>
        </S.Container>
      )}
    </>
  );
};

export default RecipePage;
