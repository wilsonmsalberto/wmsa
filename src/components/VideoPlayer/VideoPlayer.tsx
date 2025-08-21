import { Player, VideoWrapper, Title } from './VideoPlayer.styles';

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

      <Player
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        width="560"
      />
    </VideoWrapper>
  );
}
