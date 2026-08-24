import React, { useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  { id: 1, name: 'Project Alpha', tag: 'Instagram · 30 Reels/day', bg: 'linear-gradient(135deg, #1a1a2e, #16213e)' },
  { id: 2, name: 'Project Beta', tag: 'YouTube Shorts · 15/day', bg: 'linear-gradient(135deg, #0f2027, #2c5364)' },
  { id: 3, name: 'Project Gamma', tag: 'X (Twitter) · 100 Tweets/day', bg: 'linear-gradient(135deg, #23074d, #cc5333)' },
  { id: 4, name: 'Project Delta', tag: 'Instagram · 50 Reels/day', bg: 'linear-gradient(135deg, #11998e, #38ef7d)' },
  { id: 5, name: 'Project Epsilon', tag: 'TikTok · 20 Videos/day', bg: 'linear-gradient(135deg, #2b5876, #4e4376)' },
  { id: 6, name: 'Project Zeta', tag: 'Cross-platform · 60 Posts/day', bg: 'linear-gradient(135deg, #c94b4b, #4b134f)' }
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    const elements = sectionRef.current.querySelectorAll('.reveal-project');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="projects-section" ref={sectionRef} id="work">
      <div className="container">
        <div className="section-header reveal-project">
          <span className="section-label">OUR WORK</span>
          <h2 className="section-title">Campaigns that delivered results</h2>
          <p className="section-subtitle">Real brands, real growth, real impact.</p>
        </div>

        <div className="projects-grid">
          {projects.map((proj, index) => (
            <div 
              key={proj.id} 
              className="project-card reveal-project"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="project-image-wrapper" style={{ background: proj.bg }}>
                <div className="project-overlay">
                  <span className="coming-soon">Coming Soon</span>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-name">{proj.name}</h3>
                <p className="project-tag">{proj.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
