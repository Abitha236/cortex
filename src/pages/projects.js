import Layout from '@/components/Layout';

export default function Projects() {
  return (
    <Layout title="Cortex | Projects">
      <section className="content-section">
        <h2>Featured Projects</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Smart Workspace</h3>
            <p>Creating seamless digital experiences using Cortex integrations.</p>
          </div>
          <div className="card">
            <h3>Data Insights</h3>
            <p>Automating insights generation from complex enterprise data.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

