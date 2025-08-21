import { Layout } from '@/components/Layout';
import { SocialNetworks } from './Home.styles';

export function Home() {
  return (
    <Layout title="Hello!">
      <p>
        I'm a frontend engineer who's been building things on the web for over
        12 years. Currently leading frontend at GotPhoto from my home office in
        Porto.
      </p>

      <p>
        I spend my days wrestling with React, TypeScript, and whatever
        JavaScript throws at me. Sometimes I win. Usually involves making things
        load faster, work smoother, and not break when users do unexpected
        things.
      </p>

      <p>
        I've led teams from 5 to 20 developers, shipped products that actually
        increased revenue (wild, right?), and occasionally speak at conferences
        about the stuff I've learned along the way.
      </p>

      <h4>Let's connect</h4>

      <SocialNetworks>
        <p>I'm not big on social media, but you can find me in a few places.</p>
      </SocialNetworks>
    </Layout>
  );
}
