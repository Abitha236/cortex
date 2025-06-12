import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="Cortex | Home">
      
      <section className="hero mt-10">
        <div className="hero-content">
          <h1 className="hero-title text-4xl font-bold">Launch Smarter with Cortex AI</h1>
           <Link href="/chat" target="_blank" rel="noopener noreferrer">
          <button className="px-8 py-4 rounded-xl text-white text-lg font-bold bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 shadow-lg backdrop-blur-lg border border-white/20 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-2xl">
            🤖 Chat with Cortex AI
          </button>
        </Link>
          <p className="hero-subtitle text-lg mt-2">
            Collaborate, learn, and innovate—powered by AI tools built for teams.
          </p>

          <h2 className="text-2xl mt-6 font-semibold">Sponsors</h2>
          <div className="hero-logos flex justify-center gap-6 mt-4">
            <img src="/images/CompanyA.jfif" alt="Company A" className="w-24 h-24 object-cover rounded-xl" />
            <img src="/images/CompanyB.avif" alt="Company B" className="w-24 h-24 object-cover rounded-xl" />
            <img src="/images/CompanyC.webp" alt="Company C" className="w-24 h-24 object-cover rounded-xl" />
          </div>
        </div>
<br></br>
        <img src="/images/cortex-logo.webp" alt="Cortex Logo" className="logo mt-10" />
        <video autoPlay muted loop className="full-video mt-6 rounded-xl shadow-xl">
          <source src="/videos/cortex-demo.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="features-overview mt-12 text-center">
        <div className="feature-card">
          <h3 className="text-2xl font-semibold">📚 Knowledge Base</h3>
          <p className="text-gray-700">Effortlessly collect and organize insights with AI summaries.</p>
        </div>
        <div className="feature-card mt-6">
          <h3 className="text-2xl font-semibold">💬 Team Chat</h3>
          <p className="text-gray-700">Collaborate with context-aware AI suggestions in real-time.</p>
        </div>
        <div className="feature-card mt-6">
          <h3 className="text-2xl font-semibold">⚙️ Task Automation</h3>
          <p className="text-gray-700">Automate workflows and reminders with AI integrations.</p>
        </div>
      </section>

      <section className="testimonials text-center mt-16">
        <blockquote className="italic text-xl text-gray-600">
          “Cortex helped our team cut onboarding time by 50%.”
          <footer className="mt-2 font-semibold">– Product Lead at XYZ Corp.</footer>
        </blockquote>
      </section>
    </Layout>
  );
}