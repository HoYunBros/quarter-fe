import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    border: none;  
    box-sizing: border-box;
    }
  a {
    text-decoration: none;
    color: inherit;
  }
  @media screen and (max-width: 767px) {
    #root, #storybook-root {
      width: 100vw;
      height: 100vh;
      background-color: ${({ theme }) => theme.colors.gray_01};
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    #root, #storybook-root {
      width: 100vw;
      height: 100vh;
      background-color: ${({ theme }) => theme.colors.gray_01};
    }
  }
  @media screen and (min-width: 1024px) {
    body {
      background-color: ${({ theme }) => theme.colors.white};
    }
    #root, #storybook-root {
      width: 390px;
      height: 100vh;
      margin: 0 auto;
      background-color: ${({ theme }) => theme.colors.gray_01};
    }
  }
`;
