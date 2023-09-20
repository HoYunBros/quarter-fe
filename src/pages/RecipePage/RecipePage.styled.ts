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
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 0;
  gap: 24px;
`;

export const Footer = styled.footer`
  width: 100%;
  height: fit-content;
`;
