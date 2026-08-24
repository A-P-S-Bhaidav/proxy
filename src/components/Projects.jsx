import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  { id: 1, name: 'Project Alpha', tag: 'Instagram · 30 Reels/day', bg: 'linear-gradient(135deg, #1a1a2e, #16213e)' },
  { id: 2, name: 'Project Beta', tag: 'YouTube Shorts · 15/day', bg: 'linear-gradient(135deg, #0f2027, #2c5364)' },
  { id: 3, name: 'Project Gamma', tag: 'X (Twitter) · 100 Tweets/day', bg: 'linear-gradient(135deg, #23074d, #cc5333)' },
  { id: 4, name: 'Project Delta', tag: 'Instagram · 50 Reels/day', bg: 'linear-gradient(135deg, #11998e, #38ef7d)' },
  { id: 5, name: 'Project Epsilon', tag: 'TikTok · 20 Videos/day', bg: 'linear-gradient(135deg, #2b5876, #4e4376)' },
  { id: 6, name: 'Project Zeta', tag: 'Cross-platform · 60 Posts/day', bg: 'linear-gradient(135deg, #c94b4b, #4b134f)' }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="section-label">OUR WORK</span>
          <h2 className="section-title">Campaigns that delivered results</h2>
          <p className="section-subtitle">Real brands, real growth, real impact.</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((proj) => (
            <motion.div key={proj.id} className="project-card" variants={cardVariants}>
              <div className="project-image-wrapper" style={{ background: proj.bg }}>
                <div className="project-overlay">
                  <span className="coming-soon">Coming Soon</span>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-name">{proj.name}</h3>
                <p className="project-tag">{proj.tag}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
