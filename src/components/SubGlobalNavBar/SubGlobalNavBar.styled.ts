import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px 12px;
  background-color: ${({ theme }) => theme.colors.gray_00};
`;

export const LinkButton = styled(Link)`
  width: fit-content;
  height: fit-content;
`;

export const ProgressBar = styled.div<{ $progressWidth: string }>`
  position: absolute;
  width: ${({ $progressWidth }) => $progressWidth};
  height: 2px;
  background-color: ${({ theme }) => theme.colors.gray_05};
`;

export const TotalProgressBar = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.gray_01};
`;

export const ButtonContainer = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProgressBarContainer = styled.section`
  width: 100%;
  height: 2px;
  position: relative;
`;
