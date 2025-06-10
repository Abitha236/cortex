import Layout from '@/components/Layout';
import MeetingSummaryAI from "@/components/MeetingSummaryAI";
import TagNotesAI from "@/components/TagNotesAI";
import SemanticSearch from "@/components/SemanticSearch";
import ActionItemTracker from "@/components/ActionItemTracker";

export default function Features() {
  return (
    <Layout title="Cortex | Features">
      
      <section className="features-hero">
        <h1>Boost Team Productivity with Cortex AI</h1>
        <p>Turn meetings into action plans, tag insights effortlessly, search contextually, and track tasks—all with AI-enhanced precision.</p>
        
      </section>

      <section className="content-section">
        <h2>What You Can Do</h2>
        <div className="feature-grid">
          <div className="feature-block">
            <h3>Meeting Summaries</h3>
            <p>Instantly auto-generate concise summaries after every call.</p>
          </div>
          <div className="feature-block">
            <h3>Tag-Based Notes</h3>
            <p>Easily categorize and retrieve ideas using smart tags.</p>
          </div>
          <div className="feature-block">
            <h3>Semantic Search</h3>
            <p>Find relevant information using context, not just keywords.</p>
          </div>
          <div className="feature-block">
            <h3>Action Tracker</h3>
            <p>Ensure nothing slips through the cracks with task tracking.</p>
          </div>
        </div>
      </section>

      
      <section className="interactive-demo">
        <h2>Experience Features in Action</h2>
        <div className="demo-components">
          <MeetingSummaryAI />
          <TagNotesAI />
          <SemanticSearch />
          <ActionItemTracker />
        </div>
      </section>

     
      <section className="testimonial-section">
        <blockquote>
          “Cortex transformed how our team captures insights. We save 3 hours of meeting time each week!”
          <footer>— Product Manager at Acme Corp</footer>
        </blockquote>
        <div className="trust-stats">
          <div><strong>300+</strong><br />Teams onboarded</div>
          <div><strong>4.9 / 5</strong><br />Average rating</div>
        </div>
      </section>
    </Layout>
  );
}
