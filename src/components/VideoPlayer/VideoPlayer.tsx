import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { VideoWrapper, Title, FallbackLink } from './VideoPlayer.styles';

type VideoPlayerProps = {
  videoId: string;
  title: string;
  location: string;
};

export function VideoPlayer({ videoId, title, location }: VideoPlayerProps) {
  return (
    <VideoWrapper>
      <Title>{title}</Title>

      <p>{`@${location}`}</p>

      <LiteYouTubeEmbed id={videoId} title={title} />

      <FallbackLink
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Watch on YouTube →
      </FallbackLink>
    </VideoWrapper>
  );
}
