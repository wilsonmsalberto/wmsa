import React from 'react';
import { PropTypes } from 'prop-types';

// Styles
import { Player } from './styles';

const VideoPlayer = ({ videoId, title }) => (
  <Player
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    frameBorder="0"
    height="315"
    src={`https://www.youtube.com/embed/${videoId}`}
    title={title}
    width="560"
  />
);

VideoPlayer.propTypes = {
  title: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
};

export default VideoPlayer;
