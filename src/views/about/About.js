import React from 'react';

// Components
import Title from '../../components/title/Title';

// Styles
import styles from './About.module.css';

const About = () => (
  <div className={styles.Content}>
    <Title>About</Title>
    <p>
      I've been a Front End developer for about 7 years and it's been a blast.
    </p>
    <p>
      In the past 2 years I've also had the pleasure to take a swing at leadership by becoming an Engineering Lead, definitely a career I'm looking forward to pursue.
    </p>
    <p>
      I had the opportunity to meet and learn from great people and work in many different areas.
    </p>
    <p>
      From advertising to fashion, I've done a bit of everything, had some ups and downs (mostly ups) but overall it's been a great ride.
    </p>
    {/* <p>
      Here's a quick rundown of the stuff I've done and the places I've been.
    </p> */}
    <p>
      If you do have any questions, get in touch. I'd love to talk to you about it.
    </p>
  </div>
)

export default About;
