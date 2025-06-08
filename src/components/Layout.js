import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title = 'Cortex' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Cortex - AI Knowledge Platform" />
      </Head>
      <header className="navbar">
        <img src="/images/cortex-logo.webp" alt="Cortex Logo" className="logo" />
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/features">Features</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">© 2025 Cortex. All rights reserved.</footer>
    </>
  );
}