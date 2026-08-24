import React, { useEffect, useRef } from 'react';
import './Solution.css';

const steps = [
  { id: '1', title: 'Discovery & Strategy', desc: 'We sit down with you to understand your brand, target audience, platforms, and goals. Together, we define the volume — how many posts, reels, shorts, or tweets per day across each platform.' },
  { id: '2', title: 'Team Assembly', desc: 'We assign dedicated individuals to your campaign. Each person operates from their own independent social media profile — creating authentic, organic presence that feels natural, not sponsored.' },
  { id: '3', title: 'Content Planning', desc: 'Your dedicated team creates a structured content calendar aligned with your brand voice. Every reel, short, and tweet is planned to maximize reach and engagement.' },
  { id: '4', title: 'Consistent Execution', desc: 'This is where the magic happens. Your team posts with clockwork consistency — because algorithms reward accounts that show up every single day without fail.' },
  { id: '5', title: 'Organic Growth', desc: 'No paid ads, no official pages needed. Natural traction builds as consistent, authentic content reaches real audiences who genuinely engage with your brand.' },
  { id: '6', title: 'Scale & Optimize', desc: 'Review performance metrics, adjust strategy, and scale up. Add more people, more platforms, or more content — pricing stays flexible to match your evolving needs.' }
];

const Solution = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.2 });

    const elements = sectionRef.current.querySelectorAll('.timeline-step, .section-header');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="solution-section" ref={sectionRef} id="solution">
      <div className="container">
        <div className="section-header reveal-item-fade">
          <span className="section-label">OUR APPROACH</span>
          <h2 className="section-title">How we make your brand impossible to ignore</h2>
          <p className="section-subtitle">A systematic approach to organic social media growth</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`timeline-step ${isLeft ? 'left' : 'right'}`}
              >
                <div className="timeline-content">
                  <div className="timeline-number">{step.id}</div>
                  <h3 className="timeline-title">{step.title}</h3>
                  <p className="timeline-desc">{step.desc}</p>
                </div>
                <div className="timeline-node"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solution;
