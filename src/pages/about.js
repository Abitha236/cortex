import Layout from '@/components/Layout';

const team = [
  { name: 'Alice Johnson', role: 'CEO & Co‑Founder', image: '/images/alice.webp' },
  { name: 'Bob Lee', role: 'CTO & Co‑Founder', image: '/images/bob.webp' },
];

export default function About() {
  return (
    <Layout title="Cortex | About">
      <section className="about-hero">
        <h1>About Cortex</h1>
        <p>
          At Cortex, we’re building an AI-driven knowledge platform that empowers teams
          to collaborate smarter, make data-driven decisions, and surface insights effortlessly.
        </p>
      </section>

      <section className="content-section about-mission">
        <h2>Our Mission & Story</h2>
        <p>
          Founded in 2023 by data veterans, Cortex began from a simple idea: make organizational knowledge actionable.
          Today, our platform harnesses generative AI to transform how teams capture and collaborate on insights.
        </p>
        <div className="timeline">
          <div><strong>2023</strong> — Company founded</div>
          <div><strong>2024</strong> — Launched Semantic Search & Meeting AI</div>
          <div><strong>2025</strong> — Reached 100+ paying teams</div>
        </div>
        <img src="/images/cortex-dashboard.png" alt="Cortex Dashboard" className="image-large" />
      </section>

      <section className="content-section about-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {team.map((m) => (
            <div key={m.name} className="team-member">
              <img src={m.image} alt={m.name} />
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section about-values">
        <h2>Our Core Values</h2>
        <ul className="values-list">
          <li><strong>Transparency:</strong> Open communication, always.</li>
          <li><strong>Innovation:</strong> Pushing the boundaries of AI for real value.</li>
          <li><strong>Empathy:</strong> Our product reflects real-world team needs.</li>
        </ul>
      </section>
    </Layout>
  );
}
