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
  height: fit-content;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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

export const SizePickContainer = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;

export const SizesWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
`;

export const SizeWrapperButton = styled.button`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const SizeBlockWrapper = styled.div<{ $isClicked: boolean }>`
  width: 74px;
  height: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_01};
  border: ${({ theme, $isClicked }) =>
    $isClicked ? `2px solid ${theme.colors.secondary}` : `none`};
  border-radius: 16px;
`;

export const SizeImage = styled.img`
  width: fit-content;
  height: fit-content;
  object-fit: contain;
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
