import Layout from '@/components/Layout';

import MeetingSummaryAI from "@/components/MeetingSummaryAI";
import TagNotesAI from "@/components/TagNotesAI";
import SemanticSearch from "@/components/SemanticSearch";
import ActionItemTracker from "@/components/ActionItemTracker";

export default function Home() {
  return (
    <Layout title="Cortex | Home">
      <section className="hero">
        <h1>Welcome to Cortex Platform</h1>
        <main>
          <MeetingSummaryAI />
      <TagNotesAI />
      <SemanticSearch />
      <ActionItemTracker />
        </main>
       <img src="/images/cortex-logo.webp" alt="Cortex Logo" className="logo" />
        <p>Your AI-powered knowledge and collaboration platform.</p>
        <video autoPlay muted loop className="full-video">
          <source src="/videos/cortex-demo.mp4" type="video/mp4" />
        </video>
      </section>
    </Layout>
  );
}
