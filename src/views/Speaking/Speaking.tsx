import { VideoPlayer } from '@/components/VideoPlayer';
import { Layout } from '@/components/Layout';

import { Videos } from './Speaking.styles';

export const Speaking = () => (
  <Layout title="Speaking">
    <p>
      On occasion, I'll look for opportunities to share knowledge with others.
    </p>
    <p>I'd love for you to check them out and tell me what you thought!</p>
    <Videos>
      <VideoPlayer
        title="Perceived Performance"
        location="Pixels.Camp 2016"
        videoId="BM4BjQYa6ew"
      />

      <VideoPlayer
        title="First time Team Lead: What the hell am I doing??"
        location="Refresh 2018"
        videoId="oJB69Ov3Xzc"
      />
    </Videos>
  </Layout>
);
