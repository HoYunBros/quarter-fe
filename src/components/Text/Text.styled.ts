import { styled } from 'styled-components';

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.x_large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.gray_05};
`;

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.semi_bold};
  color: ${({ theme }) => theme.colors.gray_05};
`;

export const P = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.gray_05};
`;
