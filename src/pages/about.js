import Layout from '@/components/Layout';

export default function About() {
  return (
    <Layout title="Cortex | About">
      <section className="content-section">
        <h2>About Cortex</h2>
        <p>
          Cortex is an AI-driven knowledge management platform designed to streamline
          collaboration, increase productivity, and unlock insights from organizational data.
        </p>
        <img src="/images/cortex-dashboard.png" alt="Cortex Dashboard" className="image-large" />
      </section>
    </Layout>
  );
}