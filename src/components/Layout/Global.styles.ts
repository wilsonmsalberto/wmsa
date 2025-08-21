import styled, { createGlobalStyle } from 'styled-components';

export const Main = styled.main`
  max-width: 70%;
  padding: var(--space-lg) var(--space-xl) var(--space-md);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-light);
  letter-spacing: 0.1rem;
  line-height: var(--line-height-snug);

  @media screen and (max-width: 1024px) {
    max-width: none;
  }

  @media screen and (max-width: 768px) {
    padding: var(--space-md) var(--space-lg) var(--space-md);
    font-size: var(--font-size-lg);
  }
`;

export const Title = styled.h2`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-lg);

  @media screen and (max-width: 768px) {
    font-size: var(--font-size-2xl);
    margin-bottom: var(--space-md);
  }
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
  /* Modern CSS Reset */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  
  ol, ul {
    list-style: none;
  }
  
  blockquote, q {
    quotes: none;
  }
  
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  :root {
    ${createCSSColorsVariables()}
    
    /* Enhanced spacing scale */
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
    --space-2xl: 3rem;
    --space-3xl: 4rem;
    
    /* Typography scale - minimum 16px for accessibility */
    --font-size-xs: 1.6rem; /* 16px minimum */
    --font-size-sm: 1.8rem;
    --font-size-base: 2rem;
    --font-size-lg: 2.2rem;
    --font-size-xl: 2.4rem;
    --font-size-2xl: 2.8rem;
    --font-size-3xl: 3.2rem;
    --font-size-4xl: 4rem;
    
    /* Line heights */
    --line-height-tight: 1.25;
    --line-height-snug: 1.375;
    --line-height-normal: 1.5;
    --line-height-relaxed: 1.625;
    --line-height-loose: 2;
    
    /* Font weights */
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    
    /* Border radius */
    --radius-sm: 0.125rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    
    /* Transitions */
    --transition-fast: 150ms ease;
    --transition-normal: 250ms ease;
    --transition-slow: 500ms ease;
  }

  /* Enhanced CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    font-display: swap;
    font-size: 62.5%; /* 1rem = 10px */
    line-height: var(--line-height-normal);
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    font-size: var(--font-size-base); /* Ensures 20px default, well above 16px minimum */
    font-weight: var(--font-weight-normal);
    color: var(--white);
    background-color: var(--black);
    text-rendering: optimizeSpeed;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* Ensure all text meets minimum font size */
  * {
    font-size: inherit;
  }

  /* Lists inherit their styles from the content section below */

  /* Remove default button styles */
  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }

  /* Remove default link styles */
  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover, a:focus {
    text-decoration: underline;
  }

  /* Form elements */
  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    border: none;
    outline: none;
  }

  /* Images and media */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* Typography improvements with proper spacing */
  h1, h2, h3, h4, h5, h6 {
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-tight);
    margin: 0;
    margin-top: var(--space-xl);
    margin-bottom: var(--space-md);
  }

  h1:first-child, h2:first-child, h3:first-child, 
  h4:first-child, h5:first-child, h6:first-child {
    margin-top: 0;
  }

  h1 { 
    font-size: var(--font-size-4xl);
    margin-top: var(--space-2xl);
    margin-bottom: var(--space-lg);
  }
  
  h2 { 
    font-size: var(--font-size-3xl);
    margin-top: var(--space-2xl);
    margin-bottom: var(--space-lg);
  }
  
  h3 { 
    font-size: var(--font-size-2xl);
    margin-top: var(--space-xl);
    margin-bottom: var(--space-md);
  }
  
  h4 { 
    font-size: var(--font-size-xl);
    margin-top: var(--space-lg);
    margin-bottom: var(--space-md);
  }
  
  h5 { 
    font-size: var(--font-size-lg);
    margin-top: var(--space-lg);
    margin-bottom: var(--space-sm);
  }
  
  h6 { 
    font-size: var(--font-size-base);
    margin-top: var(--space-md);
    margin-bottom: var(--space-sm);
  }

  p {
    margin: 0;
    margin-bottom: var(--space-md);
    line-height: var(--line-height-relaxed);
    font-size: var(--font-size-base);
  }

  p:last-child {
    margin-bottom: 0;
  }

  /* Text elements should meet minimum font size */
  small {
    font-size: var(--font-size-xs); /* 16px minimum */
  }

  /* Additional text elements */
  span, div, label, strong, em, b, i {
    font-size: inherit; /* Inherit parent font size, minimum 16px */
  }

  /* Code elements */
  code, pre, kbd, samp {
    font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', monospace;
    font-size: var(--font-size-xs); /* 16px minimum for code */
    line-height: var(--line-height-normal);
  }

  pre {
    margin: var(--space-md) 0;
    padding: var(--space-md);
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: var(--radius-md);
    overflow-x: auto;
  }

  /* Lists with proper spacing - this applies to content lists */
  ul, ol {
    margin: 0;
    margin-bottom: var(--space-md);
    padding-left: var(--space-lg);
    list-style: disc; /* Ensure bullet points */
  }
  
  ol {
    list-style: decimal; /* Ensure numbers for ordered lists */
  }

  ul:last-child, ol:last-child {
    margin-bottom: 0;
  }

  li {
    margin-bottom: var(--space-xs);
    font-size: var(--font-size-base);
    line-height: var(--line-height-relaxed);
  }

  li:last-child {
    margin-bottom: 0;
  }

  /* Blockquotes */
  blockquote {
    margin: var(--space-lg) 0;
    padding: var(--space-md) var(--space-lg);
    border-left: 4px solid var(--yellow);
    font-style: italic;
    font-size: var(--font-size-lg);
    line-height: var(--line-height-relaxed);
  }

  /* Focus styles for accessibility */
  :focus-visible {
    outline: 2px solid var(--yellow);
    outline-offset: 2px;
  }

  /* Reduced motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* Mobile styles */
  @media screen and (max-width: 768px) {
    body {
      padding: var(--space-md);
    }
    
    :root {
      /* Mobile typography - maintain 16px minimum */
      --font-size-xs: 1.6rem; /* 16px minimum on mobile too */
      --font-size-sm: 1.7rem;
      --font-size-base: 1.8rem;
      --font-size-lg: 2rem;
      --font-size-xl: 2.2rem;
      --font-size-2xl: 2.4rem;
      --font-size-3xl: 2.8rem;
      --font-size-4xl: 3.2rem;
    }
  }

  /* Print styles */
  @media print {
    * {
      background: transparent !important;
      color: black !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }
    
    a, a:visited {
      text-decoration: underline;
    }
    
    img {
      page-break-inside: avoid;
    }
    
    h2, h3, p {
      orphans: 3;
      widows: 3;
    }
    
    h2, h3 {
      page-break-after: avoid;
    }
  }
`;
