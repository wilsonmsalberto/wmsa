import styled from 'styled-components';

export const SocialMenuWrapper = styled.ul`
  list-style-type: none;
  padding: 1rem;
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
    color: var(--white);
    &:hover {
      text-decoration: underline;
    }
  }

  span {
    display: inline-flex;
    margin-right: 1rem;
  }
`;
