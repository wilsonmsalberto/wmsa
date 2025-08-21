import styled from 'styled-components';

export const SocialMenuWrapper = styled.ul`
  list-style-type: none; /* Navigation menus should not have bullets */
  padding: var(--space-md);
  margin: 0;
`;

export const SocialMenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: var(--space-md);
  font-weight: var(--font-weight-light);

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: var(--font-size-xl);
    color: var(--white);
    &:hover {
      text-decoration: underline;
    }
  }

  span {
    display: inline-flex;
    margin-right: var(--space-md);
  }
`;

export const FooterText = styled.p`
  margin: 0;
  margin-bottom: var(--space-md);
  margin-top: var(--space-lg);
  padding: 0 var(--space-xl);
  line-height: var(--line-height-relaxed);
  font-size: var(--font-size-base);

  @media screen and (max-width: 768px) {
    padding: 0 var(--space-lg);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
