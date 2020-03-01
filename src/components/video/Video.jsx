import React from 'react';
import { PropTypes } from 'prop-types';

// Components
import VideoPlayer from '../video-player/VideoPlayer';

// Styles
import { Video as StyledVideo, Title } from './styles';

const Video = ({ title, location, videoId }) => (
  <StyledVideo>
    <Title>{title}</Title>

    <p>{`@${location}`}</p>

    <VideoPlayer title={title} videoId={videoId} />
  </StyledVideo>
);

Video.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired
};

export default Video;
