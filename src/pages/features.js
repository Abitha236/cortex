import Layout from '@/components/Layout';
import MeetingSummaryAI from "@/components/MeetingSummaryAI";
import TagNotesAI from "@/components/TagNotesAI";
import SemanticSearch from "@/components/SemanticSearch";
import ActionItemTracker from "@/components/ActionItemTracker";

export default function Features() {
  return (
    <Layout title="Cortex | Features">
      <section className="content-section">
        <h2>Key Features</h2>
        <ul className="features-list">
          <li>Real-time team collaboration</li>
          <li>AI-powered document summarization</li>
          <li>Knowledge graph integration</li>
          <li>Context-aware search</li>
          <li>Multi-device synchronization</li>
        </ul>
        <main>
          <MeetingSummaryAI />
      <TagNotesAI />
      <SemanticSearch />
      <ActionItemTracker />
        </main>
      </section>
    </Layout>
  );
}
