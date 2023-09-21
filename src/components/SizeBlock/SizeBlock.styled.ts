import { styled } from 'styled-components';

export const Container = styled.section`
  width: 74px;
  height: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.gray_01};
  cursor: pointer;
`;
