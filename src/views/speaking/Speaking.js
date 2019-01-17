import React from 'react'

// Components
import Video from '../../components/video/Video';

// Styles
import styles from './Speaking.module.css';

const Speaking = () => (
  <section className={styles.Content}>
    <h2 className={styles.Title}>Speaking</h2>
    <p>On occasion, I'll look for opportunities to share knowledge with others.</p>
    <p>I'd love for you to check them out and tell me what you thought!</p>
    <div className={styles.Videos}>
      <Video
        title="Perceived Performance"
        location="Pixels.Camp 2016"
        videoId="BM4BjQYa6ew"
      />

      <Video
        title="First time Team Lead: What the hell am I doing??"
        location="Refresh 2018"
        videoId="oJB69Ov3Xzc"
      />
    </div>
  </section>
)

export default Speaking;
