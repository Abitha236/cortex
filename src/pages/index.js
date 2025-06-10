import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout title="Cortex | Home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Launch Smarter with Cortex AI</h1>
          <p className="hero-subtitle">
            Collaborate, learn, and innovate—powered by AI tools built for teams.
          </p>
          <div className="hero-cta-wrap">
            <button className="hero-cta">Get Started Free</button>
            <button className="hero-cta-outline">Learn More</button>
          </div>
          <div className="hero-logos">
            <img src="/images/CompanyA.jfif" alt="Company A" />
            <img src="/images/CompanyB.avif" alt="Company B" />
            <img src="/images/CompanyC.webp" alt="Company C" />
          </div>
        </div>
        <img src="/images/cortex-logo.webp" alt="Cortex Logo" className="logo" />
        <video autoPlay muted loop className="full-video">
          <source src="/videos/cortex-demo.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="features-overview">
        <div className="feature-card">
          <h3>Knowledge Base</h3>
          <p>Effortlessly collect and organize insights with AI summaries.</p>
        </div>
        <div className="feature-card">
          <h3>Team Chat</h3>
          <p>Collaborate with context-aware AI suggestions in real-time.</p>
        </div>
        <div className="feature-card">
          <h3>Task Automation</h3>
          <p>Automate workflows and reminders with AI integrations.</p>
        </div>
      </section>

      

      <section className="testimonials">
        <blockquote>
          “Cortex helped our team cut onboarding time by 50%.”
          <footer>– Product Lead at XYZ Corp.</footer>
        </blockquote>
        <div className="stats-grid">
          <div className="stat">
            <span>+45%</span>
            <p>Average time saved</p>
          </div>
          <div className="stat">
            <span>4.8 / 5 ⭐</span>
            <p>User satisfaction</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
