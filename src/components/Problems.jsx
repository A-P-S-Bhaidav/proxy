import React from 'react';
import { motion } from 'framer-motion';
import './Problems.css';

const problems = [
  { num: '01', title: 'Inconsistent Posting', desc: 'The #1 killer of social media growth. Without a reliable posting schedule, algorithms bury your content and audiences lose interest.' },
  { num: '02', title: 'Lack of Dedicated Resources', desc: 'Businesses try to manage social media in-house alongside other responsibilities, leading to neglected accounts and missed opportunities.' },
  { num: '03', title: 'Inauthentic Content', desc: 'Official brand pages feel corporate and sterile. Today\'s audiences crave real, relatable content from genuine profiles — not polished ads.' },
  { num: '04', title: 'No Clear Strategy', desc: 'Posting randomly without a plan leads to wasted effort. Without clear goals and metrics, social media becomes a time sink with no measurable ROI.' },
  { num: '05', title: 'Expensive Agencies', desc: 'Traditional marketing agencies charge premium rates with rigid packages that don\'t match your specific needs or budget.' },
  { num: '06', title: 'Poor Audience Targeting', desc: 'Without understanding platform algorithms and audience behavior, content reaches the wrong people — or nobody at all.' }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const Problems = () => {
  return (
    <section className="problems-section" id="problems">
      <div className="container">
        <motion.div
          className="section-header"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="section-label">THE CHALLENGE</span>
          <h2 className="section-title">Why most brands fail at social media marketing</h2>
          <p className="section-subtitle">The harsh reality behind low engagement and invisible brands.</p>
        </motion.div>

        <motion.div
          className="problems-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {problems.map((p) => (
            <motion.div className="problem-card" key={p.num} variants={cardVariants}>
              <span className="problem-number">{p.num}</span>
              <h3 className="problem-title">{p.title}</h3>
              <p className="problem-desc">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Problems;
