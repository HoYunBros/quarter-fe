import styled from 'styled-components';

export const CarouselContainer = styled.section`
  width: 390px;
  height: 480px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 25px;
  overflow: hidden;
`;

export const SlideContainer = styled.section<{ $currentSlideIndex: number }>`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${({ $currentSlideIndex }) => $currentSlideIndex * -340}px);
`;

export const SlideWrapper = styled.div<{ $isCurrentSlide?: boolean }>`
  width: 100%;
  height: 460px;
  transition: padding 0.3s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    width: ${({ $isCurrentSlide }) => ($isCurrentSlide ? '340px' : '320px')};
    margin: ${({ $isCurrentSlide }) => ($isCurrentSlide ? '0' : '0 10px')};
    border-radius: 32px;
  }

  & > div {
    width: ${({ $isCurrentSlide }) => ($isCurrentSlide ? '340px' : '320px')};
    height: ${({ $isCurrentSlide }) => ($isCurrentSlide ? '460px' : '440px')};
    margin: ${({ $isCurrentSlide }) => ($isCurrentSlide ? '0' : '0 10px')};
    border-radius: 32px;
  }
`;

export const ArrowLeftButton = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 35px;
  bottom: 200px;
  background-color: transparent;
  border-radius: 50%;
  z-index: 9999;
`;

export const ArrowRightButton = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 35px;
  bottom: 200px;
  background-color: transparent;
  border-radius: 50%;
  z-index: 9999;
`;
