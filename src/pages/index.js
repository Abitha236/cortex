import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout title="Cortex | Home">
      <section className="hero">
        <h1>Welcome to Cortex</h1>
        <p>Your AI-powered knowledge and collaboration platform.</p>
        <video autoPlay muted loop className="full-video">
          <source src="/videos/cortex-demo.mp4" type="video/mp4" />
        </video>
      </section>
    </Layout>
  );
}
