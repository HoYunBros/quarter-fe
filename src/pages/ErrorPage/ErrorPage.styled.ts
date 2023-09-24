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
  padding: 0 16px;
  gap: 24px;
`;

export const Footer = styled.footer`
  width: 100%;
  height: fit-content;
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const HomeButton = styled.button`
  display: flex;
  height: 48px;
  padding: 0px 24px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`;
