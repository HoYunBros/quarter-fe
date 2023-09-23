import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';

import { isMobile } from '../../utils/isMobile';
import { ReactComponent as ButtonLeft } from '../../assets/icons/common/chevron_left.svg';
import { ReactComponent as ButtonRight } from '../../assets/icons/common/chevron_right.svg';
import * as S from './Carousel.styled';

type CarouselProps = {
  children: React.ReactNode;
};

type SlideProps = {
  children: React.ReactNode;
};

const Carousel = ({ children }: CarouselProps) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const touchStartPositionX = useRef(0);
  const touchEndPositionX = useRef(0);
  const handleSlideClick = (index: number) => {
    setCurrentSlideIndex(index);
  };
  // 3초마다 슬라이드 넘기기
  useEffect(() => {
    const timer = setInterval(() => {
      if (currentSlideIndex >= React.Children.count(children) - 1) {
        setCurrentSlideIndex(0);
        return;
      }
      setCurrentSlideIndex(currentSlideIndex + 1);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [currentSlideIndex, children]);

  const theme = useTheme();
  return (
    <S.CarouselContainer>
      <S.SlideContainer
        $currentSlideIndex={currentSlideIndex}
        onTouchStart={e => {
          touchStartPositionX.current = e.touches[0].clientX;
        }}
        onTouchEnd={e => {
          touchEndPositionX.current = e.changedTouches[0].clientX;
          const touchPositionDifference = touchStartPositionX.current - touchEndPositionX.current;

          if (touchPositionDifference > 5) {
            if (currentSlideIndex >= React.Children.count(children) - 1) {
              return;
            }
            handleSlideClick(currentSlideIndex + 1);
          }
          if (touchPositionDifference < -5) {
            if (currentSlideIndex <= 0) {
              return;
            }
            handleSlideClick(currentSlideIndex - 1);
          }
        }}
      >
        {children}
      </S.SlideContainer>
      {isMobile() || (
        <>
          {currentSlideIndex <= 0 || (
            <S.ArrowLeftButton
              onClick={() => {
                if (currentSlideIndex <= 0) {
                  return;
                }
                handleSlideClick(currentSlideIndex - 1);
              }}
            >
              <ButtonLeft fill={theme.colors.gray_05} />
            </S.ArrowLeftButton>
          )}
          {currentSlideIndex >= React.Children.count(children) - 1 || (
            <S.ArrowRightButton
              onClick={() => {
                if (currentSlideIndex >= React.Children.count(children) - 1) {
                  return;
                }
                handleSlideClick(currentSlideIndex + 1);
              }}
            >
              <ButtonRight fill={theme.colors.gray_05} />
            </S.ArrowRightButton>
          )}
        </>
      )}
    </S.CarouselContainer>
  );
};

const Slide = ({ children }: SlideProps) => {
  return <S.SlideWrapper>{children}</S.SlideWrapper>;
};

Carousel.Slide = Slide;

export default Carousel;
