import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: 1,
    name: 'PeakAI',
    tag: 'B2B AI SaaS Startup',
    logo: '/logos/peakai.svg',
    coverColor: '#1a1033',
    accentColor: '#9B59B6',
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
      { value: '340%', label: 'Lead Increase' },
      { value: '2.8M', label: 'Impressions' }
    ],
    duration: '4 months'
  },
  {
    id: 2,
    name: 'Thalexa',
    tag: 'Freelancing Platform Startup',
    logo: '/logos/thalexa.svg',
    coverColor: '#0D1B2A',
    accentColor: '#00D4AA',
    industry: 'Marketplace · Freelancing',
    subtitle: 'Driving platform adoption by showcasing freelancer success stories at scale.',
    challenge: 'Thalexa was a new entrant in the freelancing platform space, competing against giants like Upwork and Fiverr. They needed to build trust quickly and show potential freelancers and clients that their platform delivered real results.',
    approach: [
      'Assigned 6 dedicated content creators across Instagram, X, and YouTube',
      'Created a "Freelancer Spotlight" series — 2 reels per day featuring real success stories',
      'Built an Instagram strategy around carousel guides on freelancing tips',
      'Ran a Twitter engagement campaign with 8 daily tweets per advocate',
      'Produced weekly YouTube Shorts with tips and platform walkthroughs',
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
    logo: '/logos/zlice.svg',
    coverColor: '#2a2000',
    accentColor: '#F5C518',
    industry: 'D2C · Food & Beverage',
    subtitle: 'Making a new food delivery brand impossible to ignore on social media.',
    challenge: 'Zlice was launching in a hyper-competitive food delivery market dominated by Swiggy and Zomato. They needed massive brand awareness in their launch cities and had to create the perception of being everywhere.',
    approach: [
      'Deployed 8 brand advocates across Instagram, YouTube Shorts, and X',
      'Each advocate posted 3 food reels per day — unboxings, taste tests, delivery timelapses',
      'Created city-specific content targeting Delhi NCR, Mumbai, and Bangalore',
      'Built a "Zlice Challenge" campaign encouraging user-generated content',
      'Ran a coordinated X campaign with 10 tweets per advocate per day',
      'Produced a "Behind the Kitchen" YouTube series'
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
    logo: '/logos/ocean.jpg',
    coverColor: '#0a1628',
    accentColor: '#2563eb',
    industry: 'D2C · Beauty & Cosmetics',
    subtitle: 'Establishing a premium beauty brand through authentic, community-driven content.',
    challenge: 'Ocean was a new D2C cosmetics brand trying to build trust in a market where consumers are skeptical of new skincare products. They needed social proof at scale.',
    approach: [
      'Assigned 5 dedicated advocates focused on beauty and skincare content',
      'Created a daily skincare routine series with 2 Instagram reels per person per day',
      'Built authentic "before and after" content and honest product reviews',
      'Ran a "30-Day Skin Transformation" challenge campaign',
      'Produced YouTube Shorts showing ingredient breakdowns and tutorials',
      'Engaged with the skincare community on X with daily threads'
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
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const bookVariants = {
  hidden: { opacity: 0, y: 50, rotateY: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const Projects = () => {
  const [openBook, setOpenBook] = useState(null);

  useEffect(() => {
    if (openBook) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [openBook]);

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
          <p className="section-subtitle">Tap on a case study to explore the full story.</p>
        </motion.div>

        <motion.div
          className="books-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((proj) => (
            <motion.div
              key={proj.id}
              className="book-wrapper"
              variants={bookVariants}
              onClick={() => setOpenBook(proj)}
            >
              <div className="book">
                {/* Book Pages (visible paper edges) */}
                <div className="book-pages">
                  <div className="book-page-edge page-1"></div>
                  <div className="book-page-edge page-2"></div>
                  <div className="book-page-edge page-3"></div>
                  <div className="book-page-edge page-4"></div>
                  <div className="book-page-edge page-5"></div>
                </div>
                {/* Book Spine */}
                <div className="book-spine" style={{ background: proj.accentColor }}></div>
                {/* Book Cover */}
                <div className="book-cover" style={{ background: proj.coverColor }}>
                  <div className="book-cover-inner">
                    <div className="book-logo-wrapper">
                      <img src={proj.logo} alt={proj.name} className="book-logo" />
                    </div>
                    <div className="book-cover-text">
                      <h3 className="book-title">{proj.name}</h3>
                      <p className="book-subtitle">Case Study</p>
                    </div>
                    <div className="book-cover-accent" style={{ background: proj.accentColor }}></div>
                  </div>
                </div>
              </div>
              <p className="book-tag">{proj.tag}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Book Open Modal */}
      <AnimatePresence>
        {openBook && (
          <motion.div
            className="book-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpenBook(null)}
          >
            <motion.div
              className="book-modal"
              initial={{ opacity: 0, rotateY: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: 90, scale: 0.8 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="book-modal-spine" style={{ background: openBook.accentColor }}></div>
              
              <div className="book-modal-content">
                <button className="book-modal-close" onClick={() => setOpenBook(null)}>✕</button>
                
                <div className="book-modal-page">
                  <div className="book-page-header">
                    <img src={openBook.logo} alt={openBook.name} className="book-page-logo" />
                    <div>
                      <span className="book-page-tag" style={{ color: openBook.accentColor }}>{openBook.industry}</span>
                      <h2 className="book-page-title">{openBook.name}</h2>
                    </div>
                  </div>
                  <p className="book-page-subtitle">{openBook.subtitle}</p>

                  <div className="book-page-section">
                    <h4 style={{ color: openBook.accentColor }}>The Challenge</h4>
                    <p>{openBook.challenge}</p>
                  </div>

                  <div className="book-page-section">
                    <h4 style={{ color: openBook.accentColor }}>Our Approach</h4>
                    <ul>
                      {openBook.approach.map((item, i) => (
                        <li key={i}><span style={{ color: openBook.accentColor }}>→</span> {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="book-page-section">
                    <h4 style={{ color: openBook.accentColor }}>Results ({openBook.duration})</h4>
                    <div className="book-results-grid">
                      {openBook.results.map((r, i) => (
                        <div className="book-result-card" key={i} style={{ borderColor: `${openBook.accentColor}33` }}>
                          <div className="book-result-value" style={{ color: openBook.accentColor }}>{r.value}</div>
                          <div className="book-result-label">{r.label}</div>
                        </div>
                      ))}
                    </div>
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
