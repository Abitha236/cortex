import Layout from '@/components/Layout';

const projects = [
  {
    id: 1,
    title: 'Smart Workspace',
    summary: 'Creating seamless digital experiences using Cortex integrations.',
    image: '/images/work.webp',
    
  },
  {
    id: 2,
    title: 'Data Insights',
    summary: 'Automating insights generation from complex enterprise data.',
    image: '/images/data.jfif',
   
  },
];

export default function Projects() {
  return (
    <Layout title="Cortex | Projects">
      <section className="projects-hero">
        <h1>Featured Projects</h1>
        <p>Explore how Cortex drives innovation and delivers business impact.</p>
      </section>

      <section className="content-section">
        <div className="card-grid">
          {projects.map(p => (
            <div key={p.id} className="card">
              <img src={p.image} alt={p.title} className="card-image" />
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
             
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
