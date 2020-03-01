import React from 'react';

// Components
import Title from '../../components/title/Title';

// Styles
import { Content, SocialNetworks } from './styles';

const Home = () => (
  <Content>
    <Title>Hello!</Title>
    <p>I'm Wilson, a Front End developer based in Porto, Portugal.</p>
    <p>To learn a bit more about me, feel free to browse around.</p>
    <SocialNetworks>
      <p>When it comes to social networks, I don't have much, but I do have these.</p>
      <p>If you need to reach me, these are probably the best places to do so.</p>
    </SocialNetworks>
  </Content>
);

export default Home;
