import styled from 'styled-components';

export const VideoWrapper = styled.article`
  padding-top: 2rem;
  font-size: 1.5rem;

  .yt-lite {
    max-width: 640px;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    .yt-lite {
      max-width: 100%;
    }
  }
`;

export const Title = styled.h3`
  font-size: 2rem;
`;

export const FallbackLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  color: #fff;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  transition: border-color 0.2s ease;

  &:hover {
    border-bottom-color: #fff;
  }
`;
