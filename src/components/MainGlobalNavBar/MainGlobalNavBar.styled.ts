import { styled } from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.gary_00};
`;

export const LogoContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ModeContainer = styled.section`
  display: flex;
  align-items: center;
  padding: 4px;
  gap: 6px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.gray_02};
  /* box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25); */
`;
