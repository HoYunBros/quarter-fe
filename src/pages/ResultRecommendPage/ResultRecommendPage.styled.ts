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
  position: relative;
  top: 0;
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 0 20px;
  gap: 24px;
`;

export const Footer = styled.footer`
  width: 100%;
  height: fit-content;
  position: relative;
  bottom: 0;
  padding: 12px 16px 32px 16px;
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const UpperContainer = styled.section`
  width: 100%;
  height: 100%;

  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 34px;
`;
