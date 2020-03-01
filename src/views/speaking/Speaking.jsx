import React from 'react';

// Components
import Title from '../../components/title/Title';
import Video from '../../components/video/Video';

// Styles
import { Content, Videos } from './styles';

const Speaking = () => (
  <Content>
    <Title>Speaking</Title>
    <p>On occasion, I'll look for opportunities to share knowledge with others.</p>
    <p>I'd love for you to check them out and tell me what you thought!</p>
    <Videos>
      <Video title="Perceived Performance" location="Pixels.Camp 2016" videoId="BM4BjQYa6ew" />

      <Video title="First time Team Lead: What the hell am I doing??" location="Refresh 2018" videoId="oJB69Ov3Xzc" />
    </Videos>
  </Content>
);

export default Speaking;
