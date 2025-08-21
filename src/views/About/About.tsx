import { Layout } from '@/components/Layout';

export function About() {
  return (
    <Layout title="About">
      <h4>What I actually do</h4>
      <p>
        I've been writing code professionally since 2011. Started with PHP and
        jQuery (remember those days?), now I'm deep in the React/TypeScript
        world building stuff that needs to work for millions of users.{` `}
      </p>
      <p>
        Right now I'm at GotPhoto, where I lead the frontend team. We've cut
        page load times by 30% and somehow made our conversion rates jump 15%.
      </p>
      <p>
        Before this, I've worked at companies like Farfetch, where my
        performance tweaks added about €100K to their GMV. Not bad for changing
        how fast a page feels.
      </p>

      <h4>The technical bits</h4>
      <p>
        My sweet spot is making complex frontend architectures that don't suck
        to work with. I'm talking:
      </p>
      <ul>
        <li>React apps that actually scale</li>
        <li>Design systems that developers want to use</li>
        <li>Performance optimization that moves business metrics</li>
        <li>NextJS setups that hit 100 Lighthouse scores (yes, really)</li>
      </ul>
      <p>
        I've built everything from e-commerce platforms handling Black Friday
        traffic to sustainable fashion marketplaces to subscription management
        systems. Each one taught me new ways things can break in production.
      </p>

      <h4> Beyond the code </h4>
      <p>
        I jumped into engineering leadership a few years back at Farfetch.
        Managed 20 developers, redesigned our hiring process (cut hiring time by
        20%), and set up partnerships with universities. Turns out I actually
        enjoy the people side of tech - mentoring, building teams, figuring out
        how to ship good work without burning everyone out.
      </p>
      <p>
        When I spot something interesting or useful, I share it. I've spoken at
        conferences in Portugal and Finland, usually about performance,
        perceived speed, or the fun parts of being a first-time lead.
      </p>

      <h4>What's next </h4>
      <p>
        I'm always open to interesting problems. If you're building something
        ambitious and need someone who can handle both the technical
        architecture and team leadership, we should talk. Remote-first,
        async-friendly teams are my jam.
      </p>
      <p>
        Based in Porto but work with teams everywhere. GMT timezone means I
        overlap nicely with both US and European teams.
      </p>
    </Layout>
  );
}
