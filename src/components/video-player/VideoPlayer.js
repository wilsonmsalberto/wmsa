import React from 'react';

// Styles
import styles from './VideoPlayer.module.css';

const VideoPlayer = ({ videoId, title }) => (
  <iframe
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
    className={ styles.Player }
    frameBorder="0"
    height="315"
    src={ `https://www.youtube.com/embed/${videoId}` }
    title={ title }
    width="560"
  />
)

export default VideoPlayer;
