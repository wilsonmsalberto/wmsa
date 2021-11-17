import { normalize } from 'polished';
import styled, { createGlobalStyle } from 'styled-components';

export const Main = styled.main`
  max-width: 70%;
  padding: 1.7rem 2rem 1rem;
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
  line-height: 1.3;

  @media screen and (max-width: 1024px) {
    max-width: none;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
`;

export const colors = {
  black: `#272727`,
  yellow: `#ffe200`,
  white: `#e3e3e3`,
} as const;

const createCSSColorsVariables = () =>
  (Object.keys(colors) as (keyof typeof colors)[]).reduce(
    (acc, key) => `${acc} --${key}: ${colors[key]};`,
    ``,
  );

export const GlobalStyles = createGlobalStyle`
  ${normalize()[0]}

  &:root {
    ${createCSSColorsVariables()}
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
    font-display: swap;
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;

    color: var(--white);
    background-color: var(--black);
    text-size-adjust: 100%;
  }

  html, body {
    min-height: 100vh;
  }

  @media screen and (max-width: 768px) {
    body {
      padding: 1rem;
    }
  }
`;
