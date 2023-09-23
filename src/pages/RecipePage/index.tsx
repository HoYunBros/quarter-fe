import React, { useState } from 'react';

import { routes } from '../../router';
import MainGlobalNavBar from '../../components/MainGlobalNavBar';
import FootNavBar from '../../components/FootNavBar';

import * as S from './RecipePage.styled';
import Carousel from '../../components/Carousel';

const imgUrls = [
  'http://placekitten.com/g/400/200',
  'http://placekitten.com/g/400/200',
  'http://placekitten.com/g/400/200',
  'http://placekitten.com/g/400/200',
  'http://placekitten.com/g/400/200',
];

const RecipePage = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const changeSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };
  return (
    <S.Container>
      <S.Header>
        <MainGlobalNavBar />
      </S.Header>
      <S.Main>
        <Carousel currentSlideIndex={currentSlideIndex} changeSlide={changeSlide}>
          {imgUrls?.map((url, index) => (
            <Carousel.Slide key={index} isCurrentSlide={index === currentSlideIndex}>
              <img src={url} alt={`carousel-${index}`} />
            </Carousel.Slide>
          ))}
        </Carousel>
        <S.LinkButton to={routes.sizePick}>꿀조합 찾기</S.LinkButton>
      </S.Main>
      <S.Footer>
        <FootNavBar />
      </S.Footer>
    </S.Container>
  );
};

export default RecipePage;
