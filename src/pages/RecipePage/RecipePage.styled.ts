import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  height: fit-content;
`;

export const Main = styled.main`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 16px 16vh 16px;

  gap: 24px;
`;

export const LinkButton = styled(Link)`
  width: 340px;
  height: 68px;
  display: flex;
  justify-content: flex-start;
  line-height: 24px;
  padding: 24px 20px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.gray_01};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.gray_05};
`;

export const Footer = styled.footer`
  width: 100%;
  height: fit-content;
`;

export const CarouselContainer = styled.section`
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: initial;
  align-items: center;
  overflow: hidden;
`;
