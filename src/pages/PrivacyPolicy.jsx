import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <Link to="/" style={styles.backLink}>← Back to Home</Link>
      
      <h1 style={styles.title}>Privacy Policy</h1>
      <p style={styles.lastUpdated}>Last Updated: August 2025</p>

      <div style={styles.content}>
        <h2 style={styles.heading}>1. Introduction</h2>
        <p style={styles.paragraph}>
          At PROXY, we are committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy outlines how we collect, use, and safeguard the information you provide to us through our website and digital marketing services. By interacting with our platform, you consent to the practices described in this document.
        </p>

        <h2 style={styles.heading}>2. Data Collection</h2>
        <p style={styles.paragraph}>
          We collect personal information that you voluntarily provide to us when expressing interest in our services, such as your name, email address, phone number, and company details. Additionally, we automatically collect certain technical information when you visit our website, including your IP address, browser type, and interaction metrics.
        </p>

        <h2 style={styles.heading}>3. Usage of Information</h2>
        <p style={styles.paragraph}>
          The data we collect is used primarily to deliver and improve our social media branding and marketing services. We may use your information to communicate with you regarding your account, provide tailored strategic insights, process billing, and send important administrative updates.
        </p>

        <h2 style={styles.heading}>4. Cookies and Tracking Technologies</h2>
        <p style={styles.paragraph}>
          Our website utilizes cookies and similar tracking technologies to enhance user experience and analyze site traffic. Cookies allow us to remember your preferences and optimize our platform's performance. You have the option to disable cookies through your browser settings, though this may limit functionality.
        </p>

        <h2 style={styles.heading}>5. Third-Party Sharing</h2>
        <p style={styles.paragraph}>
          PROXY does not sell, trade, or rent your personal identification information to outside parties. We may share generic aggregated demographic information with trusted partners and affiliates strictly for analytical purposes. We may also disclose information when legally required or to protect our rights and safety.
        </p>

        <h2 style={styles.heading}>6. Data Security</h2>
        <p style={styles.paragraph}>
          We implement robust data collection, storage, and processing practices alongside strict security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information and transaction data stored on our systems.
        </p>

        <h2 style={styles.heading}>7. Your Rights</h2>
        <p style={styles.paragraph}>
          You have the right to access, update, or request the deletion of your personal data at any time. If you wish to exercise these rights or opt-out of marketing communications, please contact our support team.
        </p>

        <h2 style={styles.heading}>8. Contact Us</h2>
        <p style={styles.paragraph}>
          If you have any questions about this Privacy Policy or our data practices, please contact us at <strong>hello@proxy.agency</strong>.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '6rem 20px',
    color: '#f0ede6',
    fontFamily: "'Inter', sans-serif",
    backgroundColor: '#0a0a0a',
    minHeight: '100vh'
  },
  backLink: {
    color: '#c9a96e',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '600',
    display: 'inline-block',
    marginBottom: '3rem',
    transition: 'opacity 0.3s ease'
  },
  title: {
    fontFamily: "'Sora', sans-serif",
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '0.5rem'
  },
  lastUpdated: {
    color: 'rgba(240, 237, 230, 0.6)',
    fontSize: '0.9rem',
    marginBottom: '3rem'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  heading: {
    fontFamily: "'Sora', sans-serif",
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#f0ede6',
    marginBottom: '0.5rem'
  },
  paragraph: {
    color: 'rgba(240, 237, 230, 0.8)',
    lineHeight: '1.8',
    fontSize: '1rem'
  }
};

export default PrivacyPolicy;
