import { VideoPlayer } from '@/components/VideoPlayer';
import { Layout } from '@/components/Layout';

import { Videos } from './Speaking.styles';

export function Speaking() {
  return (
    <Layout title="Speaking">
      <h4>Conference talks & workshops</h4>
      <p>
        I talk about what I know: making websites fast, building teams that
        ship, and the messy reality of frontend development.
      </p>

      <h4>Recent talks</h4>

      <h5>Perceived Performance: Making Apps Feel Fast</h5>
      <h6>Codebits, Portugal</h6>
      <p>
        How we made Farfetch's product pages feel instant (and accidentally made
        €100K doing it). Spoiler: users don't care about your actual load times.
      </p>
      <Videos>
        <VideoPlayer
          title="Perceived Performance"
          location="Pixels.Camp 2016"
          videoId="BM4BjQYa6ew"
        />
      </Videos>

      <h5>First-Time Tech Lead: What They Don't Tell You</h5>
      <h6>TechConf, Finland </h6>
      <p>
        The honest version of becoming an engineering lead. Less "thought
        leadership," more "here's what actually happened and what I wish I'd
        known."
      </p>

      <h5>Building Design Systems Developers Won't Hate</h5>
      <h6>Multiple workshops </h6>
      <p>
        A practical guide to creating component libraries that teams actually
        want to use. Includes the politics, the tech choices, and why
        documentation matters more than you think.
      </p>

      <h4>What I talk about</h4>
      <ul>
        <li>
          <b>Performance & Speed</b> - Real-world optimization, perceived
          performance, and why your metrics might be lying to you
        </li>
        <li>
          <b>Engineering Leadership</b> - Building teams, mentoring developers,
          and shipping without drama
        </li>
        <li>
          <b>Frontend Architecture</b> - Scaling React apps, design systems, and
          making technical decisions that age well
        </li>
        <li>
          <b>Developer Experience</b>- Tools, processes, and systems that make
          engineers productive instead of frustrated
        </li>
      </ul>

      <h4>Want me to speak?</h4>
      <p>
        I'm selective about speaking engagements but always interested in events
        that value practical, honest content over hype. I do both in-person (if
        you're bringing me somewhere interesting) and remote talks.
      </p>
      <p>
        No, I won't do a talk about how AI is going to replace us all. Yes, I'll
        tell actual stories with actual numbers from actual production systems.
      </p>
      <p>
        Get in touch if you want someone who'll give your audience something
        useful instead of inspiration porn.
      </p>
    </Layout>
  );
}
