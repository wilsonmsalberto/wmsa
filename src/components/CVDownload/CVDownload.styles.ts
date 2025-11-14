import styled from 'styled-components';

export const CVDownloadSection = styled.section`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const CVLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`;

export const CVLink = styled.a`
  color: #fff;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  transition: border-color 0.2s ease;

  &:hover {
    border-bottom-color: #fff;
  }
`;
