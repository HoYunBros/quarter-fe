import { styled } from 'styled-components';

export const H1 = styled.h1<{ $color?: string }>`
  font-size: ${({ theme }) => theme.fontSizes.x_large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme, $color }) => {
    switch ($color) {
      case 'gray':
        return theme.colors.gray_04;
      case 'black':
        return theme.colors.gray_05;
      default:
        return theme.colors.gray_05;
    }
  }};
`;

export const H2 = styled.h2<{ $color?: string }>`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.semi_bold};
  color: ${({ theme, $color }) => {
    switch ($color) {
      case 'gray':
        return theme.colors.gray_04;
      case 'black':
        return theme.colors.gray_05;
      default:
        return theme.colors.gray_05;
    }
  }};
`;

export const P = styled.p<{ $color?: string }>`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme, $color }) => {
    switch ($color) {
      case 'gray':
        return theme.colors.gray_04;
      case 'black':
        return theme.colors.gray_05;
      default:
        return theme.colors.gray_05;
    }
  }};
`;
