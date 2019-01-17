import React from 'react'

// Components
import { SocialMenu, SocialMenuItem } from '../../components/social-menu/SocialMenu';

// Styles
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.Content}>
    <p>Hello!</p>
    <p>I'm Wilson, a Front End developer based in Porto, Portugal.</p>
    <p>To learn a bit more about me, feel free to browse around.</p>
    <div className={styles.SocialNetworks}>
      <p>When it comes to social networks, I don't have much, but I do have these.</p>
      <p>If you need to reach me, these are probably the best places to do so.</p>

      <SocialMenu className={styles.SocialMenu}>
        <SocialMenuItem
          url="https://www.linkedin.com/in/wilsonmsalberto"
        />
        <SocialMenuItem
          url="https://github.com/wilsonmsalberto"
        />
        <SocialMenuItem
          url="https://codepen.io/walberto"
        />
      </SocialMenu>
    </div>
  </div>
)

export default Home;
