import React from 'react';

// Components
import VideoPlayer from '../video-player/VideoPlayer';

// Styles
import styles from './Video.module.css';

const Video = ({ title, location, videoId }) => (
  <article className={styles.Video}>
    <h3 className={styles.Title}>{ title }</h3>
    <p>{`@${location}`}</p>

    <VideoPlayer
      title={ title }
      videoId={ videoId } />
  </article>
);

export default Video;
