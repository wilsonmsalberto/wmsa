import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Tagline = styled.div`
  flex-direction: column;
  padding-right: 2rem;
  justify-content: flex-end;
  color: var(--yellow);

  a {
    text-decoration: none;
    color: var(--yellow);
  }
`;

export const Title = styled.h1`
  display: flex;
  font-weight: 400;
  font-size: 3rem;
  text-decoration: none;
  color: var(--yellow);
`;

export const Subtitle = styled.h2`
  display: flex;
  margin: 0;
  font-size: 2rem;
  font-weight: 300;
  text-decoration: none;
  color: var(--yellow);
`;
