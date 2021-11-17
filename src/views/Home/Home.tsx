import { SocialNetworks } from './Home.styles';
import { Layout } from '@/components/Layout';

export const Home = () => (
  <Layout title="Hello!">
    <p>I'm Wilson, a Front End developer based in Porto, Portugal.</p>

    <p>To learn a bit more about me, feel free to browse around.</p>

    <SocialNetworks>
      <p>
        When it comes to social networks, I don't have much, but I do have
        these.
      </p>

      <p>
        If you need to reach me, these are probably the best places to do so.
      </p>
    </SocialNetworks>
  </Layout>
);
