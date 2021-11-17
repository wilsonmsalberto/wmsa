import styled from 'styled-components';

export const VideoWrapper = styled.article`
  padding-top: 2rem;
  font-size: 1.5rem;
`;

export const Title = styled.h3`
  font-size: 2rem;
`;

export const Player = styled.iframe`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
