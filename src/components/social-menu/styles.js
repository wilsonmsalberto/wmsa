import styled from '@emotion/styled';

export const SocialMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-top: 3rem;
`;

export const SocialMenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  font-weight: 300;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 2rem;
  }

  svg {
    margin-right: 1rem;
  }
`;
