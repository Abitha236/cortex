import { useState } from 'react';
import Layout from '@/components/Layout';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
  
    await new Promise((res) => setTimeout(res, 1000));
    setStatus('sent');
  };

  return (
    <Layout title="Cortex | Contact">
      <section className="content-section contact-section">
        <h2>Contact Us</h2>

        <div className="contact-grid">
          {/* Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name*
              <input type="text" name="name" placeholder="Your name" required />
            </label>

            <label>
              Email*
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>

            <label>
              Message*
              <textarea name="message" placeholder="How can we help?" required></textarea>
            </label>

            <button type="submit" disabled={status === 'sending'}>
              {status === 'sending'
                ? 'Sending...'
                : status === 'sent'
                ? 'Thanks! We’ll be in touch'
                : 'Send Message'}
            </button>
          </form>

          {/* Human touch + support links */}
          <aside className="contact-info">
            <img src="/images/team-support.jpg" alt="Support team" className="support-photo" />
            <p>
              Prefer another way? Reach us at <a href="mailto:support@cortex.com">support@cortex.com</a>.  
              Our team is always ready to help!
            </p>
            <p>
              Check our <a href="/faq">Frequently Asked Questions</a> or visit the <a href="/help">Help Center</a>.
            </p>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
