import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div style={styles.container}>
      <Link to="/" style={styles.backLink}>← Back to Home</Link>
      
      <h1 style={styles.title}>Terms & Conditions</h1>
      <p style={styles.lastUpdated}>Last Updated: August 2025</p>

      <div style={styles.content}>
        <h2 style={styles.heading}>1. Introduction</h2>
        <p style={styles.paragraph}>
          Welcome to PROXY. By engaging our social media branding, content creation, and organic growth campaigns, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully before utilizing our services. If you do not agree with any part of these terms, you must not use our services.
        </p>

        <h2 style={styles.heading}>2. Services Offered</h2>
        <p style={styles.paragraph}>
          PROXY provides comprehensive social media marketing solutions, including but not limited to brand strategy, daily content creation, community management, and multi-platform organic growth campaigns. The exact scope of work will be outlined in a specific Service Agreement signed by both parties prior to the commencement of work.
        </p>

        <h2 style={styles.heading}>3. Payment Terms</h2>
        <p style={styles.paragraph}>
          We offer flexible pricing models tailored to each client's unique needs. Invoices are issued based on the schedule detailed in your Service Agreement. Payments are due within 14 days of the invoice date unless otherwise stated. Late payments may result in a temporary suspension of services until the account balance is cleared.
        </p>

        <h2 style={styles.heading}>4. Content Ownership</h2>
        <p style={styles.paragraph}>
          Once full payment is received for a given billing cycle, the client retains full ownership of all final published content created by PROXY specifically for their brand. PROXY reserves the right to use select pieces of non-confidential content in our portfolio, case studies, and promotional materials.
        </p>

        <h2 style={styles.heading}>5. Confidentiality</h2>
        <p style={styles.paragraph}>
          Both parties agree to keep all proprietary information, trade secrets, business strategies, and internal metrics completely confidential. We take your privacy and business data seriously, and our team adheres to strict non-disclosure policies regarding client information.
        </p>

        <h2 style={styles.heading}>6. Limitation of Liability</h2>
        <p style={styles.paragraph}>
          While PROXY implements industry-leading strategies to drive organic growth, we cannot guarantee specific numerical outcomes (e.g., exact follower counts or viral reach) due to the unpredictable nature of social media algorithms. PROXY shall not be held liable for any indirect, incidental, or consequential damages resulting from the use of our services.
        </p>

        <h2 style={styles.heading}>7. Termination</h2>
        <p style={styles.paragraph}>
          Either party may terminate the Service Agreement with a 30-day written notice. Any outstanding balances for work already completed or in-progress during the notice period must be paid in full upon termination.
        </p>

        <h2 style={styles.heading}>8. Governing Law</h2>
        <p style={styles.paragraph}>
          These Terms & Conditions shall be governed by and construed in accordance with the laws of India, specifically within the jurisdiction of New Delhi.
        </p>

        <h2 style={styles.heading}>9. Contact</h2>
        <p style={styles.paragraph}>
          If you have any questions or concerns regarding these Terms & Conditions, please reach out to us at <strong>hello@proxy.agency</strong>.
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

export default TermsAndConditions;
