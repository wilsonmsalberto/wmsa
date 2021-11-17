import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding-top: 3rem;
    justify-content: flex-start;
  }
`;

export const Menu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  && > li {
    display: inline-block;
    margin: 0;
    padding-right: 2rem;
    font-size: 1.5rem;
  }

  && > li:last-child {
    padding-right: 0;
    color: var(--yellow);
  }

  && > li > a {
    padding: 1.5rem 0;
    text-transform: uppercase;
    color: var(--yellow);
  }
`;
