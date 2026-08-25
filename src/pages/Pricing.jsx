import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import './Pricing.css';

const plans = [
  {
    name: 'Starter',
    subtitle: 'For early-stage brands',
    price: '14,999',
    period: '/mo',
    people: '1 Person',
    commitments: '1 reel + 3 tweets/day',
    features: [
      '1 dedicated brand advocate',
      '1 Instagram reel per day',
      '3 tweets per day',
      'Independent organic profile',
      'Weekly performance summary',
      'Single platform focus'
    ],
    highlight: false,
    cta: 'Get Started'
  },
  {
    name: 'Growth',
    subtitle: 'For scaling brands',
    price: '34,999',
    period: '/mo',
    people: '3 People',
    commitments: '2 reels + 5 tweets each/day',
    features: [
      '3 dedicated brand advocates',
      '2 Instagram reels per person per day',
      '5 tweets per person per day',
      'Independent organic profiles',
      'Bi-weekly strategy calls',
      'Multi-platform coverage (Instagram + X)'
    ],
    highlight: false,
    cta: 'Get Started'
  },
  {
    name: 'Professional',
    subtitle: 'Most popular for growing brands',
    price: '74,999',
    period: '/mo',
    people: '5 People',
    commitments: '3 reels + 5 tweets + 2 shorts each/day',
    features: [
      '5 dedicated brand advocates',
      '3 Instagram reels per person per day',
      '5 tweets per person per day',
      '2 YouTube Shorts per person per day',
      'Weekly strategy calls + analytics dashboard',
      'Full platform coverage (Instagram + X + YouTube)',
      'Content calendar & approval workflow',
      'Dedicated account manager'
    ],
    highlight: true,
    cta: 'Get Started'
  },
  {
    name: 'Enterprise',
    subtitle: 'For aggressive growth',
    price: '1,49,999',
    period: '/mo',
    people: '10 People',
    commitments: '3 reels + 8 tweets + 3 shorts each/day',
    features: [
      '10 dedicated brand advocates',
      '3 Instagram reels per person per day',
      '8 tweets per person per day',
      '3 YouTube Shorts per person per day',
      'Daily strategy syncs + real-time analytics',
      'All platforms (Instagram + X + YouTube + TikTok)',
      'Content calendar & approval workflow',
      'Priority account manager',
      'City-targeted content campaigns',
      'Monthly performance review with leadership'
    ],
    highlight: false,
    cta: 'Get Started'
  },
  {
    name: 'Custom',
    subtitle: 'Tailored to your needs',
    price: null,
    period: '',
    people: 'Flexible',
    commitments: 'You decide everything',
    features: [
      'Choose your number of advocates',
      'Define daily commitments per person',
      'Pick platforms that matter to you',
      'Fully flexible pricing',
      'Dedicated strategy team',
      'Custom reporting & analytics',
      'Direct access to leadership'
    ],
    highlight: false,
    cta: 'Contact Us',
    isCustom: true,
    contacts: [
      { name: 'Anant Pratap Singh Bhaidav', phone: '+91 9968359499', email: 'anantbhaidav@gmail.com' },
      { name: 'Bhowmik Ahuja', phone: '+91 8517801653', email: 'bhowmikahuja7@gmail.com' }
    ]
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const Pricing = () => {
  const [showCustomContacts, setShowCustomContacts] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pricing-page">
      <div className="pricing-container">
        <motion.button
          className="pricing-back-btn"
          onClick={() => navigate('/')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span>←</span> Back to Home
        </motion.button>

        <motion.div
          className="pricing-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="section-label">PRICING</span>
          <h1 className="pricing-title">Transparent pricing, flexible plans</h1>
          <p className="pricing-subtitle">
            Choose the scale that fits your brand. Every plan includes independent organic profiles, daily consistent content, and zero paid ads.
          </p>
        </motion.div>

        <motion.div
          className="pricing-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing-card ${plan.highlight ? 'highlighted' : ''}`}
              variants={cardVariants}
            >
              {plan.highlight && <div className="popular-badge">Most Popular</div>}
              <div className="pricing-card-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-subtitle">{plan.subtitle}</p>
              </div>

              <div className="plan-price-section">
                {plan.price ? (
                  <>
                    <span className="plan-currency">₹</span>
                    <span className="plan-price">{plan.price}</span>
                    <span className="plan-period">{plan.period}</span>
                  </>
                ) : (
                  <span className="plan-price custom-price">Let's Talk</span>
                )}
              </div>

              <div className="plan-specs">
                <div className="plan-spec">
                  <span className="spec-icon">👥</span>
                  <span>{plan.people}</span>
                </div>
                <div className="plan-spec">
                  <span className="spec-icon">📋</span>
                  <span>{plan.commitments}</span>
                </div>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.isCustom ? (
                <>
                  <button
                    className="plan-cta-btn custom-btn"
                    onClick={() => setShowCustomContacts(!showCustomContacts)}
                  >
                    {showCustomContacts ? 'Hide Contacts' : plan.cta}
                  </button>
                  {showCustomContacts && (
                    <div className="custom-contacts">
                      {plan.contacts.map((c, i) => (
                        <div key={i} className="custom-contact-row">
                          <strong>{c.name}</strong>
                          <a href={`tel:${c.phone.replace(/\s/g, '')}`}>{c.phone}</a>
                          <a href={`mailto:${c.email}`}>{c.email}</a>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link to="/" className="plan-cta-btn">
                  {plan.cta}
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="pricing-footer-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p>All plans include independent organic profiles, no official pages needed. Prices in INR, billed monthly. <Link to="/refund">Refund Policy</Link></p>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
