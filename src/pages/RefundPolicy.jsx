import React from 'react';
import { Link } from 'react-router-dom';

const RefundPolicy = () => {
  return (
    <div style={styles.container}>
      <Link to="/" style={styles.backLink}>← Back to Home</Link>
      
      <h1 style={styles.title}>Refund Policy</h1>
      <p style={styles.lastUpdated}>Last Updated: August 2025</p>

      <div style={styles.content}>
        <h2 style={styles.heading}>1. General Policy</h2>
        <p style={styles.paragraph}>
          At PROXY, we are fully committed to delivering high-quality social media branding and marketing services. Due to the custom, service-based nature of our work, which requires immediate allocation of time, creative resources, and team bandwidth, we maintain a strict refund policy to ensure fairness to both our clients and our agency.
        </p>

        <h2 style={styles.heading}>2. Cancellation & Partial Refunds</h2>
        <p style={styles.paragraph}>
          Clients may cancel their service agreement at any time by providing written notice. If a cancellation request is submitted before any deliverables or strategic work has commenced for the billing cycle, a partial refund may be issued minus administrative fees. Once work has begun, fees are generally non-refundable for that specific billing cycle.
        </p>

        <h2 style={styles.heading}>3. Non-Refundable Items</h2>
        <p style={styles.paragraph}>
          Payments made for completed design work, published content, active ad campaign management, and consultation hours are strictly non-refundable. Additionally, setup fees and deposits required to initiate a project are completely non-refundable as they cover preliminary research and resource allocation.
        </p>

        <h2 style={styles.heading}>4. Dispute Resolution Process</h2>
        <p style={styles.paragraph}>
          If you are unsatisfied with the services provided, we encourage you to contact your dedicated account manager immediately. We pride ourselves on our collaborative approach and will work diligently to address your concerns, revise strategies, and ensure the deliverables meet the agreed-upon standards before considering any financial remedies.
        </p>

        <h2 style={styles.heading}>5. Processing Refunds</h2>
        <p style={styles.paragraph}>
          In the rare event that a refund is approved by our management team, it will be processed directly to the original payment method used during the transaction. Please allow 7-14 business days for the credited amount to reflect in your bank account, depending on your financial institution's processing times.
        </p>

        <h2 style={styles.heading}>6. Contact</h2>
        <p style={styles.paragraph}>
          To initiate a discussion regarding a cancellation or potential refund, please email our billing department directly at <strong>hello@proxy.agency</strong> with your account details and reasoning.
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

export default RefundPolicy;
