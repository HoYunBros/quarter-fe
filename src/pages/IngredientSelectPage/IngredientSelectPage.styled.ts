import { styled } from 'styled-components';

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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 32px 20px;
  gap: 24px;
`;

export const Footer = styled.footer`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 0 16px 32px 16px;
`;

export const IngredientsContainer = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  gap: 10px;
`;

export const IngredientWrapper = styled.button`
  width: 62px;
  height: 86px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`;

export const IngredientImage = styled.img<{ $isClicked: boolean }>`
  width: fit-content;
  height: fit-content;
  border-radius: 50%;
  object-fit: cover;
  border: ${({ theme, $isClicked }) =>
    `2px solid ${$isClicked ? theme.colors.secondary : theme.colors.gray_00}`};
`;

export const IngredientName = styled.span`
  width: fit-content;
  height: fit-content;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.gray_05};
`;
