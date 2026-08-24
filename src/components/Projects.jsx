import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: 1,
    name: 'PeakAI',
    tag: 'B2B AI SaaS Startup',
    bg: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
    industry: 'B2B SaaS · Artificial Intelligence',
    subtitle: 'Building thought leadership and demand generation for an AI-first SaaS platform.',
    challenge: 'PeakAI had a powerful product but zero social media presence. As a B2B AI startup, they struggled to stand out in a crowded market where every company claimed to be "AI-powered". Their LinkedIn had 200 followers and their content strategy was non-existent.',
    approach: [
      'Deployed 4 dedicated brand advocates on LinkedIn and X (Twitter)',
      'Created a daily content calendar focused on AI industry insights, product use-cases, and behind-the-scenes engineering stories',
      'Each advocate posted 2 LinkedIn articles/carousels + 5 tweets per day',
      'Built a narrative around PeakAI\'s unique approach to enterprise AI adoption',
      'Ran a coordinated thought-leadership campaign positioning the founders as industry experts',
      'Produced 3 YouTube Shorts per week showcasing product demos and AI trend breakdowns'
    ],
    results: [
      { value: '12K+', label: 'LinkedIn Followers' },
      { value: '340%', label: 'Increase in Inbound Leads' },
      { value: '2.8M', label: 'Organic Impressions' }
    ],
    duration: '4 months'
  },
  {
    id: 2,
    name: 'Thalexa',
    tag: 'Freelancing Platform Startup',
    bg: 'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)',
    industry: 'Marketplace · Freelancing',
    subtitle: 'Driving platform adoption by showcasing freelancer success stories at scale.',
    challenge: 'Thalexa was a new entrant in the freelancing platform space, competing against giants like Upwork and Fiverr. They needed to build trust quickly and show potential freelancers and clients that their platform delivered real results.',
    approach: [
      'Assigned 6 dedicated content creators across Instagram, X, and YouTube',
      'Created a "Freelancer Spotlight" series — 2 reels per day featuring real success stories',
      'Built an Instagram strategy around carousel guides: "How to land your first client", "Pricing your services right"',
      'Ran a Twitter engagement campaign with 8 daily tweets per advocate, engaging with the freelancing community',
      'Produced weekly YouTube Shorts with tips, platform walkthroughs, and testimonials',
      'Coordinated a hashtag campaign #ThalexaHustlers that gained organic traction'
    ],
    results: [
      { value: '25K+', label: 'Instagram Followers' },
      { value: '8K+', label: 'Platform Signups' },
      { value: '5.1M', label: 'Content Reach' }
    ],
    duration: '5 months'
  },
  {
    id: 3,
    name: 'Zlice',
    tag: 'D2C Food Delivery Startup',
    bg: 'linear-gradient(135deg, #11998e, #38ef7d)',
    industry: 'D2C · Food & Beverage',
    subtitle: 'Making a new food delivery brand impossible to ignore on social media.',
    challenge: 'Zlice was launching in a hyper-competitive food delivery market dominated by Swiggy and Zomato. They needed massive brand awareness in their launch cities and had to create the perception of being everywhere — without the marketing budget of their competitors.',
    approach: [
      'Deployed 8 brand advocates across Instagram, YouTube Shorts, and X',
      'Each advocate posted 3 food reels per day — unboxings, taste tests, delivery speed timelapses',
      'Created city-specific content targeting Delhi NCR, Mumbai, and Bangalore',
      'Built a "Zlice Challenge" campaign encouraging users to film their reactions to deliveries',
      'Ran a coordinated X campaign with 10 tweets per advocate per day, engaging with food influencers',
      'Produced a "Behind the Kitchen" YouTube series showing food preparation and quality standards'
    ],
    results: [
      { value: '45K+', label: 'Instagram Followers' },
      { value: '18K+', label: 'App Downloads' },
      { value: '9.2M', label: 'Total Impressions' }
    ],
    duration: '6 months'
  },
  {
    id: 4,
    name: 'Ocean',
    tag: 'D2C Cosmetic Brand',
    bg: 'linear-gradient(135deg, #667eea, #764ba2)',
    industry: 'D2C · Beauty & Cosmetics',
    subtitle: 'Establishing a premium beauty brand through authentic, community-driven content.',
    challenge: 'Ocean was a new D2C cosmetics brand trying to build trust in a market where consumers are skeptical of new skincare products. They needed social proof at scale and had to compete with established brands that had years of influencer relationships.',
    approach: [
      'Assigned 5 dedicated advocates — all focused on beauty and skincare content on Instagram and YouTube',
      'Created a daily skincare routine series with 2 Instagram reels per person per day',
      'Built authentic "before and after" content and honest product reviews from independent profiles',
      'Ran a "30-Day Skin Transformation" challenge campaign across all advocates simultaneously',
      'Produced YouTube Shorts showing ingredient breakdowns, application tutorials, and comparison reviews',
      'Engaged with the skincare community on X with daily threads on skincare science and myths'
    ],
    results: [
      { value: '38K+', label: 'Instagram Followers' },
      { value: '₹22L+', label: 'Revenue Generated' },
      { value: '7.5M', label: 'Content Reach' }
    ],
    duration: '5 months'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedProject]);

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
            <motion.div
              key={proj.id}
              className="project-card"
              variants={cardVariants}
              onClick={() => setSelectedProject(proj)}
            >
              <div className="project-image-wrapper" style={{ background: proj.bg }}>
                <div className="project-overlay">
                  <button className="view-project-btn">View Case Study</button>
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

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="project-modal-header">
                <div className="project-modal-header-bg" style={{ background: selectedProject.bg }}></div>
                <button className="project-modal-close" onClick={() => setSelectedProject(null)}>✕</button>
              </div>
              <div className="project-modal-body">
                <span className="project-modal-tag">{selectedProject.industry}</span>
                <h2 className="project-modal-title">{selectedProject.name}</h2>
                <p className="project-modal-subtitle">{selectedProject.subtitle}</p>

                <div className="project-modal-section">
                  <h4>The Challenge</h4>
                  <p>{selectedProject.challenge}</p>
                </div>

                <div className="project-modal-section">
                  <h4>Our Approach</h4>
                  <ul>
                    {selectedProject.approach.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-modal-section">
                  <h4>Results ({selectedProject.duration})</h4>
                  <div className="project-modal-results">
                    {selectedProject.results.map((r, i) => (
                      <div className="result-card" key={i}>
                        <div className="result-value">{r.value}</div>
                        <div className="result-label">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
