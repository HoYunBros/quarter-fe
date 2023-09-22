import styled from 'styled-components';

export const CarouselContainer = styled.section`
  width: 390px;
  height: 460px;
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
  transition: transform 0.2s ease-in-out;
  transform: translateX(${({ $currentSlideIndex }) => $currentSlideIndex * -340}px);
`;

export const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;

  & > img {
    width: 340px;
    height: 100%;
    padding: 0 6px;
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
