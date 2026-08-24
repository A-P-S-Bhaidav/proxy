import React, { useEffect, useRef } from 'react';
import './Problems.css';

const problems = [
  { id: '01', title: 'Inconsistent Posting', desc: 'The #1 killer of social media growth. Without a reliable posting schedule, algorithms bury your content and audiences lose interest.' },
  { id: '02', title: 'Lack of Dedicated Resources', desc: 'Businesses try to manage social media in-house alongside other responsibilities, leading to neglected accounts and missed opportunities.' },
  { id: '03', title: 'Inauthentic Content', desc: 'Official brand pages feel corporate and sterile. Today\'s audiences crave real, relatable content from genuine profiles — not polished ads.' },
  { id: '04', title: 'No Clear Strategy', desc: 'Posting randomly without a plan leads to wasted effort. Without clear goals and metrics, social media becomes a time sink with no measurable ROI.' },
  { id: '05', title: 'Expensive Agencies', desc: 'Traditional marketing agencies charge premium rates with rigid packages that don\'t match your specific needs or budget.' },
  { id: '06', title: 'Poor Audience Targeting', desc: 'Without understanding platform algorithms and audience behavior, content reaches the wrong people — or nobody at all.' }
];

const Problems = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    const elements = sectionRef.current.querySelectorAll('.reveal-item');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="problems-section" ref={sectionRef} id="problems">
      <div className="container">
        <div className="section-header reveal-item">
          <span className="section-label">THE CHALLENGE</span>
          <h2 className="section-title">Why most brands fail at social media marketing</h2>
          <p className="section-subtitle">Understanding the pitfalls is the first step to avoiding them.</p>
        </div>
        <div className="problems-grid">
          {problems.map((prob, index) => (
            <div 
              key={index} 
              className="problem-card reveal-item"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="problem-number">{prob.id}</div>
              <h3 className="problem-title">{prob.title}</h3>
              <p className="problem-desc">{prob.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
