import { createGlobalStyle } from 'styled-components';
import { reset } from '@/styles/reset';


export const GlobalStyle = createGlobalStyle`

  :root {
    --pink-primary: hsl(15, 44%, 86%);
    --pink-primary-70: hsl(14, 44%, 86%, 85%);

    --pink-second: hsl(1, 84%, 76%);
    --pink-second-70: hsl(1, 84%, 76%, 85%);

    --pink-middle: hsl(1, 59%, 59%);
    --pink-middle-70: hsl(1, 59%, 59%, 85%);

    --pink-reverse-second: hsl(0, 35%, 40%);
    --pink-reverse-second-70: hsl(0, 35%, 40%, 85%);

    --pink-reverse: hsl(0, 0%, 5%);
    --pink-reverse-70: hsl(0, 0%, 5%, 70%);


    --dark-primary: hsl(0, 0%, 94%);
    --dark-second: hsl(28, 86%, 64%);
    --dark-middle: hsl(22, 50%, 43%);
    --dark-reverse-second: hsl(22, 50%, 23%);
    --dark-reverse: hsl(0, 0%, 5%);

    --dark-primary-70: hsl(0, 0%, 94%, 85%);
    --dark-second-70: hsl(28, 86%, 64%, 85%);
    --dark-middle-70: hsl(22, 50%, 43%, 85%);
    --dark-reverse-second-70: hsl(22, 50%, 23%, 85%);
    --dark-reverse-70: hsla(0, 0%, 5%, 70%);


    --white: hsl(0, 100%, 100%);
    --black: hsl(0, 100%, 0%);
    --white-70: hsl(0, 0%, 84%);
    --black-70: hsl(240, 1%, 35%);
  }

  *,
  :before,
  :after {
    ${reset};
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    height: 100%;
    -webkit-text-size-adjust: 100%;
    min-width: 375px;

    &.is-mobile {
      font-size: 12px;
    }

    &.is-scroll-lock {
      overflow: hidden;
    }
  }

  ol,
  ul {
    list-style: none;
  }

  table {
    width: 100%;
    border-spacing: 0;
    table-layout: fixed;
  }

  th,
  td {
    text-align: center;
    vertical-align: middle;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    border-radius: 0;
    background: none;
    appearance: none;
    cursor: pointer;
  }

  .education_a {
    padding-bottom: 20px;
  }

  .education_notion_span {
    font-size: 20px;
    padding-bottom: 4px;
    margin-bottom: 10px;
    margin-top: 20px;
    background-color: transparent;
    color: var(--dark-primary-70);
    font-weight: bold;
    border-bottom: 1px solid var(--dark-primary-70);
  }

  .education_notion_read_more {
    font-size: 20px;
    background-color: transparent;
    color: var(--dark-second-70);
    font-weight: bold;
  }

  .education_notion_read_more:hover {
    color: var(--dark-second);
  }
`;