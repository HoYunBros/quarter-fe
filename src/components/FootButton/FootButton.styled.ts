import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;
