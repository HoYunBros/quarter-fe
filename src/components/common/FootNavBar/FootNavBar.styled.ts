import { styled } from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.gray_00};
`;

export const NavItemWrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 2px;
  background-color: transparent;
  cursor: pointer;
`;

export const NavItemTitle = styled.p<{ $isClicked: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.semi_bold};
  color: ${({ theme, $isClicked }) => ($isClicked ? theme.colors.primary : theme.colors.gray_03)};
`;
