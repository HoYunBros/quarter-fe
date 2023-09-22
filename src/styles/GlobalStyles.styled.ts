import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    border: none;  
    box-sizing: border-box;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    /* 버튼 크기 초기화 */
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    cursor: pointer;
  }
  @media screen and (max-width: 767px) {
    #root, #storybook-root {
      width: 100vw;
      height: 100vh;
      background-color: ${({ theme }) => theme.colors.gray_00};
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    #root, #storybook-root {
      width: 100vw;
      height: 100vh;
      background-color: ${({ theme }) => theme.colors.gray_00};
    }
  }
  @media screen and (min-width: 1024px) {
    body {
      background-color: ${({ theme }) => theme.colors.gray_01};
    }
    #root, #storybook-root {
      width: 390px;
      height: 100vh;
      margin: 0 auto;
      background-color: ${({ theme }) => theme.colors.gray_00};
    }
  }
`;
