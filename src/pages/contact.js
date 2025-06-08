import Layout from '@/components/Layout';

export default function Contact() {
  return (
    <Layout title="Cortex | Contact">
      <section className="content-section">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required />
          <button type="submit">Send</button>
        </form>
      </section>
    </Layout>
  );
}
